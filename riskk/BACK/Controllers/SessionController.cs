namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SessionController : ControllerBase
    {
        ISessionRepository Sessionrepository;
        public SessionController (ISessionRepository _Sessionrepository){
                Sessionrepository = _Sessionrepository;
        }
                // GET api/Session
        [HttpGet]
        public async Task<IActionResult> GetSession()
        {
        

            try
            {
                List<Session>? allSession = await Sessionrepository.GetAllSession();
                return Ok(allSession);
            }
            catch
            {
                return Problem();
            }

        }

        // GET api/Session/2
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSessionByID(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                Session? Session = await Sessionrepository.GetSessionById(id);
                return Ok(Session);
            }
            catch
            {
                return Problem();
            }
        }
        // POST api/Session
        [HttpPost]
        public async Task<IActionResult> AddSession(Session Session)
        {

            try
            {
                if (Session == null)
                {
                    return BadRequest();
                }
                bool res = await Sessionrepository.AddSession(Session);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
        }

        // PUT api/Session
        [HttpPut]
        public async Task<IActionResult> EditSession(Session Session)
        {

            try
            {
                if (Session == null)
                {
                    return BadRequest();
                }
                bool res = await Sessionrepository.UpdateSession(Session);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
            
        }

        // DELETE api/Session/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSession(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                bool role = await Sessionrepository.DeleteSession(id);
                return Ok(role);
            }
            catch
            {
                return Problem();
            }
        }

        
    }
                
}
    
