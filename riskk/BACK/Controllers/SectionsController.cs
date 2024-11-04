namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SectionsController : ControllerBase
    {
        private readonly ISectionsRepository _SectionsRepository;

        public SectionsController(ISectionsRepository SectionsRepository)
        {
            _SectionsRepository = SectionsRepository;
        }

        // GET api/Sections
        [HttpGet]
        public async Task<IActionResult> GetSections()
        {
            try
            {
                List<Section>? allSections = await _SectionsRepository.GetAllSections();
                return Ok(allSections);
            }
            catch
            {
                return Problem();
            }
        }

        // GET api/Sections/2
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSectionById(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                Section? Section = await _SectionsRepository.GetSectionById(id);
                return Ok(Section);
            }
            catch
            {
                return Problem();
            }
        }

        // POST api/Sections
        [HttpPost]
        public async Task<IActionResult> AddSection(Section Section)
        {
            try
            {
                if (Section == null)
                {
                    return BadRequest();
                }
                bool result = await _SectionsRepository.AddSection(Section);
                return Ok(result);
            }
            catch
            {
                return Problem();
            }
        }

        // PUT api/Sections
        [HttpPut]
        public async Task<IActionResult> UpdateSection(Section Section)
        {
            try
            {
                if (Section == null)
                {
                    return BadRequest();
                }
                bool result = await _SectionsRepository.UpdateSection(Section);
                return Ok(result);
            }
            catch
            {
                return Problem();
            }
        }

        // DELETE api/Sections/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSection(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                bool result = await _SectionsRepository.DeleteSection(id);
                return Ok(result);
            }
            catch
            {
                return Problem();
            }
        }
    }
}
