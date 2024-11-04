namespace backend.Repositorys
{
    public interface ICourseRepository
    {
        Task<List<Course>?> GetAllCourses();
        Task<Course?> GetCourseById(int? CourseId);
        Task<bool> AddCourse(Course course);
        Task<bool> UpdateCourse(Course course);
        Task<bool> DeleteCourse(int? courseId);
    }
}
