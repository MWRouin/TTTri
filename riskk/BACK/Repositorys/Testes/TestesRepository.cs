
namespace backend.Repositorys
{
    public class TestRepository : ITestesRepository
    {
        private readonly TriTrainContext _dbContext;
        private readonly string _connection;

        public TestRepository(TriTrainContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _connection = configuration.GetConnectionString("ConnectionString")!;
        }

        public async Task<bool> AddTest(Test test)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (test == null)
                {
                    return false;
                }

                await _dbContext.Tests.AddAsync(test);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "TestRepository", "AddTest");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<bool> DeleteTest(int? testId)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if(testId == 0)
                {
                    return false;
                }

                Test? test = await _dbContext.Tests.FindAsync(testId);
                if (test == null)
                {
                    return false;
                }
                    _dbContext.Tests.Remove(test);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "TestRepository", "DeleteTest");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

    

        public async Task<List<Test>?> GetAllTests()
        {
            try
            {
                List<Test> tests = await _dbContext.Tests.ToListAsync();
                return tests;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "TestRepository", "GetAllTests");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                return null;
            }
        }

        public async Task<Test?> GetTestById(int? testId)
        {
            try
            {
                if (testId == null || testId == 0)
                {
                    return null;
                }

                return await _dbContext.Tests.FindAsync(testId);
            }
            catch (Exception e)
            {
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "TestRepository", "GetTestById");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return null;
            }
        }

        public async Task<bool> UpdateTest(Test test)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (test == null)
                {
                    return false;
                }

                _dbContext.Tests.Update(test);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "TestRepository", "UpdateTest");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }
    }

}




