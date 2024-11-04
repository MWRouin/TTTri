

namespace backend.Repositorys
{
    public class QuestionsRepository : IQuestionsRepository
    {
        private readonly TriTrainContext _dbContext;
        private readonly string _connection;

        public QuestionsRepository(TriTrainContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _connection = configuration.GetConnectionString("ConnectionString")!;
        }

        public async Task<bool> AddQuestions(Question Questions)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (Questions == null)
                {
                    return false;
                }

                await _dbContext.Questions.AddAsync(Questions);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "QuestionsRepository", "AddUQuestions");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<bool> DeleteQuestions(int? QuestionsId)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if(QuestionsId == 0)
                {
                    return false;
                }

                Question? Questions = await _dbContext.Questions.FindAsync(QuestionsId);
                if (Questions == null)
                {
                    return false;
                }
                    _dbContext.Questions.Remove(Questions);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "QuestionsRepository", "DeleteQuestions");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<List<Question>?> GetAllQuestions()
        {
            try
            {
                List<Question> Questions = await _dbContext.Questions.ToListAsync();
                return Questions;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "QuestionsRepository", "GetAllQuestions");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                return null;
            }
        }

        public async Task<Question?> GetQuestionsById(int? QuestionsId)
        {
            try
            {
                if (QuestionsId == null || QuestionsId == 0)
                {
                    return null;
                }

                return await _dbContext.Questions.FindAsync(QuestionsId);
            }
            catch (Exception e)
            {
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "QuestionsRepository", "GetQuestionsById");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return null;
            }
        }

        public async Task<bool> UpdateQuestions(Question Questions)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (Questions == null)
                {
                    return false;
                }

                _dbContext.Questions.Update(Questions);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "QuestionsRepository", "UpdateQuestions");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }
    }

}





