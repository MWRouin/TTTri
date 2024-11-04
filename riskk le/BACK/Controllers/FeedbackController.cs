namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedbackController : ControllerBase
    {
        IFeedbackRepository Feedbackrepository;
        public FeedbackController (IFeedbackRepository _Feedbackrepository){
                Feedbackrepository = _Feedbackrepository;
        }
                // GET api/Feedback
        [HttpGet]
        public async Task<IActionResult> GetFeedback()
        {
        

            try
            {
                List<Feedback>? allFeedback = await Feedbackrepository.GetAllFeedback();
                return Ok(allFeedback);
            }
            catch
            {
                return Problem();
            }

        }

        // GET api/Feedback/2
        [HttpGet("{id}")]
        public async Task<IActionResult> GetFeedbackByID(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                Feedback? Feedback = await Feedbackrepository.GetFeedbackById(id);
                return Ok(Feedback);
            }
            catch
            {
                return Problem();
            }
        }
        // POST api/Feedback
        [HttpPost]
        public async Task<IActionResult> AddFeedback(Feedback Feedback)
        {

            try
            {
                if (Feedback == null)
                {
                    return BadRequest();
                }
                bool res = await Feedbackrepository.AddFeedback(Feedback);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
        }

        // PUT api/Feedback
        [HttpPut]
        public async Task<IActionResult> EditFeedback(Feedback Feedback)
        {

            try
            {
                if (Feedback == null)
                {
                    return BadRequest();
                }
                bool res = await Feedbackrepository.UpdateFeedback(Feedback);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
            
        }

        // DELETE api/Feedback/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFeedback(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                bool role = await Feedbackrepository.DeleteFeedback(id);
                return Ok(role);
            }
            catch
            {
                return Problem();
            }
        }
                
    }
    
}