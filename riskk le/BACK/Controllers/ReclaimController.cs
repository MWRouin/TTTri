namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReclaimsController : ControllerBase
    {
        IReclaimRepository ReclaimRepository;
        public ReclaimsController (IReclaimRepository _ReclaimRepository){
                ReclaimRepository = _ReclaimRepository;
        }
                // GET api/Reclaims
        [HttpGet]
        public async Task<IActionResult> GetReclaim()
        {
        

            try
            {
                List<Reclaim>? allReclaims = await ReclaimRepository.GetAllReclaims();
                return Ok(allReclaims);
            }
            catch
            {
                return Problem();
            }

        }

        // GET api/Reclaims/2
        [HttpGet("{id}")]
        public async Task<IActionResult> GetReclaimByID(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                Reclaim? Reclaim = await ReclaimRepository.GetReclaimById(id);
                return Ok(Reclaim);
            }
            catch
            {
                return Problem();
            }
        }
        // POST api/Reclaims
        [HttpPost]
        public async Task<IActionResult> AddReclaim(Reclaim Reclaim)
        {

            try
            {
                if (Reclaim == null)
                {
                    return BadRequest();
                }
                bool res = await ReclaimRepository.AddReclaim(Reclaim);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
        }

        // PUT api/Reclaims
        [HttpPut]
        public async Task<IActionResult> EditReclaim(Reclaim Reclaim)
        {

            try
            {
                if (Reclaim == null)
                {
                    return BadRequest();
                }
                bool res = await ReclaimRepository.UpdateReclaim(Reclaim);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
            
        }

        // DELETE api/Reclaims/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReclaim(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                bool role = await ReclaimRepository.DeleteReclaim(id);
                return Ok(role);
            }
            catch
            {
                return Problem();
            }
        }
                
    }
    
}