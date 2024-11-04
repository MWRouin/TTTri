

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailConfirmationController : ControllerBase
    {
        IEmailConfirmationRepository EmailConfirmationrepository;
        public EmailConfirmationController (IEmailConfirmationRepository _EmailConfirmationrepository){
                EmailConfirmationrepository = _EmailConfirmationrepository;
        }
                // GET api/EmailConfirmation
        [HttpGet]
        public async Task<IActionResult> GetEmailConfirmation()
        {
        

            try
            {
                List<EmailConfirmation>? allEmailConfirmation = await EmailConfirmationrepository.GetAllEmailConfirmation();
                return Ok(allEmailConfirmation);
            }
            catch
            {
                return Problem();
            }

        }

        // GET api/EmailConfirmation/2
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmailConfirmationByID(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                EmailConfirmation? EmailConfirmation = await EmailConfirmationrepository.GetEmailConfirmationById(id);
                return Ok(EmailConfirmation);
            }
            catch
            {
                return Problem();
            }
        }
        // POST api/EmailConfirmation
        [HttpPost]
        public async Task<IActionResult> AddEmailConfirmation(EmailConfirmation EmailConfirmation)
        {

            try
            {
                if (EmailConfirmation == null)
                {
                    return BadRequest();
                }
                bool res = await EmailConfirmationrepository.AddEmailConfirmation(EmailConfirmation);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
        }

        // PUT api/EmailConfirmation
        [HttpPut]
        public async Task<IActionResult> EditEmailConfirmation(EmailConfirmation EmailConfirmation)
        {

            try
            {
                if (EmailConfirmation == null)
                {
                    return BadRequest();
                }
                bool res = await EmailConfirmationrepository.UpdateEmailConfirmation(EmailConfirmation);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
            
        }

        // DELETE api/EmailConfirmation/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmailConfirmation(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                bool role = await EmailConfirmationrepository.DeleteEmailConfirmation(id);
                return Ok(role);
            }
            catch
            {
                return Problem();
            }
        }
                
    }
    
}