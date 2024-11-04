namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParticipationsController : ControllerBase
    {
        IParticipationRepository ParticipationRepository;
        public ParticipationsController (IParticipationRepository _ParticipationRepository){
                ParticipationRepository = _ParticipationRepository;
        }
                // GET api/Participations
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
        

            try
            {
                List<Participation>? allParticipations = await ParticipationRepository.GetAllParticipations();
                return Ok(allParticipations);
            }
            catch
            {
                return Problem();
            }

        }

        // GET api/Participations/2
        [HttpGet("{id}")]
        public async Task<IActionResult> GetParticipationByID(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                Participation? participation = await ParticipationRepository.GetParticipationById(id);
                return Ok(participation);
            }
            catch
            {
                return Problem();
            }
        }
        // POST api/Participations
        [HttpPost]
        public async Task<IActionResult> AddParticipation(Participation participation)
        {

            try
            {
                if (participation == null)
                {
                    return BadRequest();
                }
                bool res = await ParticipationRepository.AddParticipation(participation);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
        }

        // PUT api/Participations
        [HttpPut]
        public async Task<IActionResult> EditParticipation(Participation participation)
        {

            try
            {
                if (participation == null)
                {
                    return BadRequest();
                }
                bool res = await ParticipationRepository.UpdateParticipation(participation);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
            
        }

        // DELETE api/Participations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteParticipation(int? participationId)
        {
            try
            {
                if (participationId == 0 )
                {
                    return BadRequest();
                }
                bool role = await ParticipationRepository.DeleteParticipation(participationId);
                return Ok(role);
            }
            catch
            {
                return Problem();
            }
        }
                
    }
    
}