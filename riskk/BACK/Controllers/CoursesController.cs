namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        ICourseRepository CourseRepository;
        public CoursesController (ICourseRepository _CourseRepository){
                CourseRepository = _CourseRepository;
        }
                // GET api/Courses
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
        

            try
            {
                List<Course>? allCourses = await CourseRepository.GetAllCourses();
                return Ok(allCourses);
            }
            catch
            {
                return Problem();
            }

        }

        // GET api/Courses/2
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCourseByID(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                Course? course = await CourseRepository.GetCourseById(id);
                return Ok(course);
            }
            catch
            {
                return Problem();
            }
        }
        // POST api/Courses
        [HttpPost]
        public async Task<IActionResult> AddCourse(Course course)
        {

            try
            {
                if (course == null)
                {
                    return BadRequest();
                }
                bool res = await CourseRepository.AddCourse(course);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
        }

        // PUT api/Courses
        [HttpPut]
        public async Task<IActionResult> EditCourse(Course course)
        {

            try
            {
                if (course == null)
                {
                    return BadRequest();
                }
                bool res = await CourseRepository.UpdateCourse(course);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
            
        }

        // DELETE api/Courses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourse(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                bool role = await CourseRepository.DeleteCourse(id);
                return Ok(role);
            }
            catch
            {
                return Problem();
            }
        }
                
    }
    
}