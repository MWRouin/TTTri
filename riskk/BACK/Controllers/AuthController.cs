
namespace backend.Controllers
{


    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IUsersRepository _UsersRepository;
        private readonly IRolesrepository _RolesRepository;

        public AuthController(IConfiguration configuration, IUsersRepository UsersRepository, IRolesrepository RolesRepository)
        {
            _configuration = configuration;
            _UsersRepository = UsersRepository;
            _RolesRepository = RolesRepository;
        }

        [HttpPost("signup")]
        public async Task<IActionResult> Signup(SignUpDto SignUpDto)
        {
            if (SignUpDto == null || string.IsNullOrEmpty(SignUpDto.Email) || string.IsNullOrEmpty(SignUpDto.Password))
            {
                return BadRequest("Invalid signup details.");
            }

            // Check if user with the same email already exists
            var existingUser = await _UsersRepository.GetUserByEmail(SignUpDto.Email);
            if (existingUser != null)
            {
                return Conflict("Email is already in use.");
            }

            var role = await _RolesRepository.GetRoleByDescription("User");


            if (role == null)
            {
                return BadRequest("Role not found.");
            }

            // Create a new user
            var newUser = new User
            {
                Email = SignUpDto.Email,
                Password = SignUpDto.Password,
                Firstname = SignUpDto.Firstname,
                Lastname = SignUpDto.Lastname,
                Telephone = SignUpDto.Telephone,
                Addresse = SignUpDto.Addresse,
                RoleId = role.RoleId,
                Role=role,
                IsActive = true,
            };

            var createdUser = await _UsersRepository.AddUser(newUser);

            if (createdUser == null)
            {
                return StatusCode(500, "Error creating user.");
            }

           
            string token = CreateToken(newUser);
            newUser.Token = token;

            return Ok(await _UsersRepository.UpdatetUser(newUser));
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            if (loginDto == null)
            {
                return BadRequest("Invalid login request.");
            }

            // Attempt to find the user by email and password
            var user = await _UsersRepository.Login(loginDto.Email, loginDto.Password);

            if (user == null)
            {
                return NotFound("Invalid email or password.");
            }

            // Generate JWT token
            string token = CreateToken(user);
            user.Token = token;

            // Update the user's token in the database (optional)
            await _UsersRepository.UpdatetUser(user);

            // Fetch the role by RoleId and include it in the response
            var userWithRole = await _UsersRepository.GetUserWithRole(user.UserId);

            if (userWithRole == null)
            {
                return NotFound("User role not found.");
            }

            // Return the user object with the role and token
            return Ok(userWithRole);
        }


        [HttpPost("refreshtoken")]
        public async Task<IActionResult> RefreshToken()
        {
            string refreshToken = Request.Cookies["refreshToken"] == null ? "" : Request.Cookies["refreshToken"]!;

            var tokenHandler = new JwtSecurityTokenHandler();
            SecurityToken securityToken;
            ClaimsPrincipal principal = tokenHandler.ValidateToken(
                refreshToken, new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    ValidateAudience = false,
                    ValidateIssuer = false,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value!)),
                }, out securityToken);
            if (principal == null)
            {
                return Unauthorized("Refresh token invalide");
            }
            string userName = principal!.Identity!.Name!;
            if (userName! == "")
            {
                return Unauthorized("Refresh token invalide");
            }
            User? user = await _UsersRepository.GetUserByUserEmailrefreshToken(userName, refreshToken!);

            if (user == null)
            {
                return Unauthorized("Refresh token invalide");
            }
            if (user.TokenRdateExpiration < DateTime.Now)
            {
                return Unauthorized("Refresh token expiré");
            }
            string token = CreateToken(user);
            user.Token = token;
            return Ok(await _UsersRepository.UpdatetUser(user));
        }


        
        [HttpGet("GetAllHeaders")]
        public async Task<IActionResult> GetAllHeaders()
        {
            string refreshToken = "";
            foreach (var header in Request.Headers)
            {
                if (header.Key!.Equals("refreshToken"))
                {
                    refreshToken = header.Value!;
                }
            }
            if (refreshToken.Length == 0 || refreshToken == null)
            {
                return Ok(new RetourMessage("Refresh token invalide", false, null!));
            }
            refreshToken = refreshToken.Split(" ").ToList()[1];
            var tokenHandler = new JwtSecurityTokenHandler();
            SecurityToken securityToken;

            var ValidateRefresh = false;
            string userName = "";
            try
            {
                ClaimsPrincipal principal = tokenHandler.ValidateToken(
               refreshToken, new TokenValidationParameters
               {
                   ValidateIssuerSigningKey = true,
                   ValidateAudience = false,
                   ValidateIssuer = false,
                   IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value!)),
               }, out securityToken);

                if (principal == null)
                {
                    return Ok(new RetourMessage("Refresh token invalide", false, null!));
                }
                userName = principal!.Identity!.Name!;
                if (userName! == "")
                {
                    return Ok(new RetourMessage("Refresh token invalide", false, null!));
                }
            }
            catch
            {
                ValidateRefresh = true;
            }
            if (ValidateRefresh == false)
            {
                Ok(new RetourMessage("Refresh token invalide", false, null!));
            }
            User? user = await _UsersRepository.GetUserByUserEmailrefreshToken(userName, refreshToken!);

            if (user == null)
            {
                return Ok(new RetourMessage("Refresh token invalide", false, null!));
            }
            if (user.TokenRdateExpiration < DateTime.Now)
            {
                return Ok(new RetourMessage("Refresh token expiré", false, null!));
            }
            string token = CreateToken(user);
            user.Token = token;
            return Ok(await _UsersRepository.UpdatetUser(user));
        }
        private RefreshToken GenerateRefreshToken(User user)
        {

            List<Claim> claims = new List<Claim> {
                new Claim(ClaimTypes.Name, user.Email!)

            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
               _configuration.GetSection("AppSettings:Token").Value!));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                    claims: claims,
                    signingCredentials: creds,
                    expires: DateTime.Now.AddSeconds(30)
                );

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);
            var refreshToken = new RefreshToken
            {
                Token = jwt,
                DateCreation = DateTime.Now,
                DateEpiration = DateTime.Now.AddSeconds(30),
            };
            return refreshToken;
        }

        private void SetRefreshToken(RefreshToken newrefreshToken)
        {
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Expires = newrefreshToken.DateEpiration
            };

            Response.Cookies.Append("refreshToken", newrefreshToken.Token, cookieOptions);
        }

        private string CreateToken(User user)
        {
            List<Claim> claims = new List<Claim> {
                new Claim(ClaimTypes.Name, user.Email!),
                new Claim(ClaimTypes.Role, user.Role.Description) // Add role to token claims
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                _configuration.GetSection("AppSettings:Token").Value!));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            DateTime dateTime = DateTime.Now;
            // dateTime = dateTime.AddMinutes(2);
            dateTime = dateTime.AddHours(24);
            JwtSecurityToken token = new JwtSecurityToken(
                    claims: claims,
                    //expires: DateTime.Now.AddHours(24),
                    expires: dateTime,
                    signingCredentials: creds
                );
            var jwt = new JwtSecurityTokenHandler().WriteToken(token);
            return jwt;
        }
    }
}