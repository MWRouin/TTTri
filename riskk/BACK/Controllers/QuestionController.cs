namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        IQuestionsRepository Questionsrepository;
        public QuestionsController (IQuestionsRepository _Questionsrepository){
                Questionsrepository = _Questionsrepository;
        }
                // GET api/Questions
        [HttpGet]
        public async Task<IActionResult> GetQuestions()
        {
        

            try
            {
                List<Question>? allQuestions = await Questionsrepository.GetAllQuestions();
                return Ok(allQuestions);
            }
            catch
            {
                return Problem();
            }

        }

        // GET api/Questions/2
        [HttpGet("{id}")]
        public async Task<IActionResult> GetQuestionsByID(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                Question? Questions = await Questionsrepository.GetQuestionsById(id);
                return Ok(Questions);
            }
            catch
            {
                return Problem();
            }
        }
        // POST api/Questions
        [HttpPost]
        public async Task<IActionResult> AddQuestions(Question Questions)
        {

            try
            {
                if (Questions == null)
                {
                    return BadRequest();
                }
                bool res = await Questionsrepository.AddQuestions(Questions);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
        }

        // PUT api/Questions
        [HttpPut]
        public async Task<IActionResult> EditQuestions(Question Questions)
        {

            try
            {
                if (Questions == null)
                {
                    return BadRequest();
                }
                bool res = await Questionsrepository.UpdateQuestions(Questions);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
            
        }

        // DELETE api/Questions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQuestions(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                bool role = await Questionsrepository.DeleteQuestions(id);
                return Ok(role);
            }
            catch
            {
                return Problem();
            }
        }
                
    }
    
}