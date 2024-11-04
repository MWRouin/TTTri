namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestsController : ControllerBase
    {
        ITestesRepository Testsrepository;
        public TestsController (ITestesRepository _Testsrepository){
                Testsrepository = _Testsrepository;
        }
                // GET api/Tests
        [HttpGet]
        public async Task<IActionResult> GetTests()
        {
        

            try
            {
                List<Test>? allTests = await Testsrepository.GetAllTests();
                return Ok(allTests);
            }
            catch
            {
                return Problem();
            }

        }

        // GET api/Tests/2
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTestByID(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                Test? test = await Testsrepository.GetTestById(id);
                return Ok(test);
            }
            catch
            {
                return Problem();
            }
        }
        // POST api/Tests
        [HttpPost]
        public async Task<IActionResult> AddTest(Test Test)
        {

            try
            {
                if (Test == null)
                {
                    return BadRequest();
                }
                bool res = await Testsrepository.AddTest(Test);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
        }

        // PUT api/Tests
        [HttpPut]
        public async Task<IActionResult> EditTest(Test Test)
        {

            try
            {
                if (Test == null)
                {
                    return BadRequest();
                }
                bool res = await Testsrepository.UpdateTest(Test);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
            
        }

        // DELETE api/Tests/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTest(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                bool role = await Testsrepository.DeleteTest(id);
                return Ok(role);
            }
            catch
            {
                return Problem();
            }
        }
                
    }
    
}
