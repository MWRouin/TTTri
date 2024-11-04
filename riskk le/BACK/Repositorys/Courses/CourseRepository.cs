
namespace backend.Repositorys
{
    public class CourseRepositroy : ICourseRepository
    {
        private readonly TriTrainContext _dbContext;
        private readonly string _connection;

        public CourseRepositroy(TriTrainContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _connection = configuration.GetConnectionString("ConnectionString")!;
        }

        public async Task<bool> AddCourse(Course course)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (course == null)
                {
                    return false;
                }

                await _dbContext.Courses.AddAsync(course);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "CourseRepositroy", "AddCourse");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<bool> DeleteCourse(int? courseId)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if(courseId == 0)
                {
                    return false;
                }

                Course? course = await _dbContext.Courses.FindAsync(courseId);
                if (course == null)
                {
                    return false;
                }
                    _dbContext.Courses.Remove(course);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "CourseRepositroy", "DeleteCourse");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<List<Course>?> GetAllCourses()
        {
            try
            {
                List<Course> courses = await _dbContext.Courses.ToListAsync();
                return courses;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "CourseRepositroy", "GetAllCourses");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                return null;
            }
        }

        public async Task<Course?> GetCourseById(int? CourseId)
        {
            try
            {
                if (CourseId == null || CourseId == 0)
                {
                    return null;
                }

                return await _dbContext.Courses.FindAsync(CourseId);
            }
            catch (Exception e)
            {
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "CourseRepositroy", "GetCourseById");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return null;
            }
        }

        public async Task<bool> UpdateCourse(Course course)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (course == null)
                {
                    return false;
                }

                _dbContext.Courses.Update(course);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "CourseRepositroy", "Updatecourse");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }
    }

}
