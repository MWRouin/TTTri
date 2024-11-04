namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnswersController : ControllerBase
    {
        IAnswersRepository Answersrepository;
        public AnswersController (IAnswersRepository _Answersrepository){
                Answersrepository = _Answersrepository;
        }
                // GET api/Answers
        [HttpGet]
        public async Task<IActionResult> GetAnswers()
        {
        
            try
            {
                List<Answer>? allAnswers = await Answersrepository.GetAllAnswers();
                return Ok(allAnswers);
            }
            catch
            {
                return Problem();
            }
        }

        // GET api/Answers/2
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAnswersByID(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                Answer? Answers = await Answersrepository.GetAnswersById(id);
                return Ok(Answers);
            }
            catch
            {
                return Problem();
            }
        }
        // POST api/Answers
        [HttpPost]
        public async Task<IActionResult> AddAnswers(Answer Answers)
        {

            try
            {
                if (Answers == null)
                {
                    return BadRequest();
                }
                bool res = await Answersrepository.AddAnswers(Answers);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
        }

        // PUT api/Answers
        [HttpPut]
        public async Task<IActionResult> EditAnswers(Answer Answers)
        {

            try
            {
                if (Answers == null)
                {
                    return BadRequest();
                }
                bool res = await Answersrepository.UpdateAnswers(Answers);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
            
        }

        // DELETE api/Answers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAnswers(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                bool role = await Answersrepository.DeleteAnswers(id);
                return Ok(role);
            }
            catch
            {
                return Problem();
            }
        }
                
    }
    
}