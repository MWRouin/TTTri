namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResponseController : ControllerBase
    {
        IResponseRepository Responserepository;
        public ResponseController (IResponseRepository _Responserepository){
                Responserepository = _Responserepository;
        }
                // GET api/Response
        [HttpGet]
        public async Task<IActionResult> GetResponse()
        {
        

            try
            {
                List<Response>? allResponse = await Responserepository.GetAllResponse();
                return Ok(allResponse);
            }
            catch
            {
                return Problem();
            }

        }

        // GET api/Response/2
        [HttpGet("{id}")]
        public async Task<IActionResult> GetResponseByID(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                Response? Response = await Responserepository.GetResponseById(id);
                return Ok(Response);
            }
            catch
            {
                return Problem();
            }
        }
        // POST api/Response
        [HttpPost]
        public async Task<IActionResult> AddResponse(Response Response)
        {

            try
            {
                if (Response == null)
                {
                    return BadRequest();
                }
                bool res = await Responserepository.AddResponse(Response);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
        }

        // PUT api/Response
        [HttpPut]
        public async Task<IActionResult> EditResponse(Response Response)
        {

            try
            {
                if (Response == null)
                {
                    return BadRequest();
                }
                bool res = await Responserepository.UpdateResponse(Response);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
            
        }

        // DELETE api/Response/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteResponse(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                bool role = await Responserepository.DeleteResponse(id);
                return Ok(role);
            }
            catch
            {
                return Problem();
            }
        }
                
    }
    
}