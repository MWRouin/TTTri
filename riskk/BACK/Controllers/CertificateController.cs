namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CertificateController : ControllerBase
    {
        ICertificateRepository Certificaterepository;
        public CertificateController (ICertificateRepository _Certificaterepository){
                Certificaterepository = _Certificaterepository;
        }
                // GET api/Certificate
        [HttpGet]
        public async Task<IActionResult> GetCertificate()
        {
        

            try
            {
                List<Certificate>? allCertificate = await Certificaterepository.GetAllCertificate();
                return Ok(allCertificate);
            }
            catch
            {
                return Problem();
            }

        }

        // GET api/Certificate/2
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCertificateByID(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                Certificate? Certificate = await Certificaterepository.GetCertificateById(id);
                return Ok(Certificate);
            }
            catch
            {
                return Problem();
            }
        }
        // POST api/Certificate
        [HttpPost]
        public async Task<IActionResult> AddCertificate(Certificate Certificate)
        {

            try
            {
                if (Certificate == null)
                {
                    return BadRequest();
                }
                bool res = await Certificaterepository.AddCertificate(Certificate);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
        }

        // PUT api/Certificate
        [HttpPut]
        public async Task<IActionResult> EditCertificate(Certificate Certificate)
        {

            try
            {
                if (Certificate == null)
                {
                    return BadRequest();
                }
                bool res = await Certificaterepository.UpdateCertificate(Certificate);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
            
        }

        // DELETE api/Certificate/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCertificate(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                bool role = await Certificaterepository.DeleteCertificate(id);
                return Ok(role);
            }
            catch
            {
                return Problem();
            }
        }
                
    }
    
}