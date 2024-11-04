namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LevelsController : ControllerBase
    {
        ILevelsRepository Levelsrepository;
        public LevelsController (ILevelsRepository _Levelsrepository){
                Levelsrepository = _Levelsrepository;
        }
                // GET api/Levels
        [HttpGet]
        public async Task<IActionResult> GetLevels()
        {
        

            try
            {
                List<Level>? allLevels = await Levelsrepository.GetAllLevels();
                return Ok(allLevels);
            }
            catch
            {
                return Problem();
            }

        }

        // GET api/Levels/2
        [HttpGet("{id}")]
        public async Task<IActionResult> GetLevelByID(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                Level? level = await Levelsrepository.GetLevelById(id);
                return Ok(level);
            }
            catch
            {
                return Problem();
            }
        }
        // POST api/Levels
        [HttpPost]
        public async Task<IActionResult> AddLevel(Level Level)
        {

            try
            {
                if (Level == null)
                {
                    return BadRequest();
                }
                bool res = await Levelsrepository.Addlevel(Level);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
        }

        // PUT api/Levels
        [HttpPut]
        public async Task<IActionResult> EditLevel(Level Level)
        {

            try
            {
                if (Level == null)
                {
                    return BadRequest();
                }
                bool res = await Levelsrepository.UpdateLevel(Level);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
            
        }

        // DELETE api/Levels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLevel(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                bool role = await Levelsrepository.DeleteLevel(id);
                return Ok(role);
            }
            catch
            {
                return Problem();
            }
        }
                
    }
    
}
