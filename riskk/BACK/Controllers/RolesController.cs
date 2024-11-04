namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController : ControllerBase
    {
        IRolesrepository rolesrepository;
        public RolesController(IRolesrepository _rolesrepository)
        {
            rolesrepository = _rolesrepository;
        }

        // GET api/roles
        [HttpGet]
        public async Task<IActionResult> GetAllRoles()
        {
            try
            {
                List<Role>? LRole = await rolesrepository.GetAllRoles();
                return Ok(LRole);
            }
            catch
            {
                return Problem();
            }
        }
        // GET api/roles/test/2
        [HttpGet("{id}")]
        public async Task<IActionResult> GetRoleByID(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                Role? role = await rolesrepository.GetRoleById(id);
                return Ok(role);
            }
            catch
            {
                return Problem();
            }

        }

        // POST api/roles
        [HttpPost]
        public async Task<IActionResult> AddRole(Role role)
        {
            try
            {
                if (role == null)
                {
                    return BadRequest();
                }
                bool res = await rolesrepository.AddRole(role);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
        }

        // PUT api/roles
        [HttpPut]
        public async Task<IActionResult> EditRole(Role role)
        {
            try
            {
                if (role == null)
                {
                    return BadRequest();
                }
                bool res = await rolesrepository.UpdateRole(role);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
        }

        // DELETE api/roles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRole(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                bool role = await rolesrepository.DeleteRole(id);
                return Ok(role);
            }
            catch
            {
                return Problem();
            }
        }
    }

}