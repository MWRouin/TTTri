namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResponseDetailController : ControllerBase
    {
        IResponseDetailRepository ResponseDetailrepository;
        public ResponseDetailController (IResponseDetailRepository _ResponseDetailrepository){
                ResponseDetailrepository = _ResponseDetailrepository;
        }
                // GET api/ResponseDetail
        [HttpGet]
        public async Task<IActionResult> GetResponseDetail()
        {
        

            try
            {
                List<ResponseDetail>? allResponseDetail = await ResponseDetailrepository.GetAllResponseDetail();
                return Ok(allResponseDetail);
            }
            catch
            {
                return Problem();
            }

        }

        // GET api/ResponseDetail/2
        [HttpGet("{id}")]
        public async Task<IActionResult> GetResponseDetailByID(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                ResponseDetail? ResponseDetail = await ResponseDetailrepository.GetResponseDetailById(id);
                return Ok(ResponseDetail);
            }
            catch
            {
                return Problem();
            }
        }
        // POST api/ResponseDetail
        [HttpPost]
        public async Task<IActionResult> AddResponseDetail(ResponseDetail ResponseDetail)
        {

            try
            {
                if (ResponseDetail == null)
                {
                    return BadRequest();
                }
                bool res = await ResponseDetailrepository.AddResponseDetail(ResponseDetail);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
        }

        // PUT api/ResponseDetail
        [HttpPut]
        public async Task<IActionResult> EditResponseDetail(ResponseDetail ResponseDetail)
        {

            try
            {
                if (ResponseDetail == null)
                {
                    return BadRequest();
                }
                bool res = await ResponseDetailrepository.UpdateResponseDetail(ResponseDetail);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
            
        }

        // DELETE api/ResponseDetail/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteResponseDetail(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                bool role = await ResponseDetailrepository.DeleteResponseDetail(id);
                return Ok(role);
            }
            catch
            {
                return Problem();
            }
        }
                
    }
    
}