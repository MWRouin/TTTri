namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        IUsersRepository Usersrepository;
        public UsersController (IUsersRepository _Usersrepository){
                Usersrepository = _Usersrepository;
        }
                // GET api/Users
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
        

            try
            {
                List<User>? allUsers = await Usersrepository.GetUsers();
                return Ok(allUsers);
            }
            catch
            {
                return Problem();
            }

        }

        // GET api/Users/2
        [HttpGet("by/{id}")]
        public async Task<IActionResult> GetUserByID(int id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                User? user = await Usersrepository.GetUserByID(id);
                return Ok(user);
            }
            catch
            {
                return Problem();
            }
        }
        // POST api/Users
        [HttpPost]
        public async Task<IActionResult> AddUser(User User)
        {

            try
            {
                if (User == null)
                {
                    return BadRequest();
                }
                bool res = await Usersrepository.AddUser(User);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
        }

        // PUT api/Users
        [HttpPut]
        public async Task<IActionResult> EditUser(User User)
        {

            try
            {
                if (User == null)
                {
                    return BadRequest();
                }
                User res = await Usersrepository.UpdatetUser(User);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
            
        }

        // DELETE api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                bool role = await Usersrepository.DeleteUser(id);
                return Ok(role);
            }
            catch
            {
                return Problem();
            }
        }
                
    }
    
}










