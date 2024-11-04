
namespace backend.Repositorys
{
    public class AnswersRepository : IAnswersRepository 
    {
        private readonly TriTrainContext _dbContext;
        private readonly string _connection;

        public AnswersRepository(TriTrainContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _connection = configuration.GetConnectionString("ConnectionString")!;
        }

        public async Task<bool> AddAnswers(Answer Answers)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (Answers == null)
                {
                    return false;
                }

                await _dbContext.Answers.AddAsync(Answers);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "AnswersRepository", "AddAnswers");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<bool> DeleteAnswers(int? AnswersId)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if(AnswersId == 0)
                {
                    return false;
                }

                Answer? Answers = await _dbContext.Answers.FindAsync(AnswersId);
                if (Answers == null)
                {
                    return false;
                }
                    _dbContext.Answers.Remove(Answers);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "AnswersRepository", "DeleteAnswers");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<List<Answer>?> GetAllAnswers()
        {
            try
            {
                List<Answer> Answers = await _dbContext.Answers.ToListAsync();
                return Answers;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "AnswersRepository", "GetAllAnswers");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                return null;
            }
        }

        public async Task<Answer?> GetAnswersById(int? AnswersId)
        {
            try
            {
                if (AnswersId == null || AnswersId == 0)
                {
                    return null;
                }

                return await _dbContext.Answers.FindAsync(AnswersId);
            }
            catch (Exception e)
            {
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "AnswersRepository", "GetAnswersById");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return null;
            }
        }

        public async Task<bool> UpdateAnswers(Answer Answers)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (Answers == null)
                {
                    return false;
                }

                _dbContext.Answers.Update(Answers);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "AnswersRepository", "UpdateAnswers");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }
    }

}





