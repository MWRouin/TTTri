

namespace backend.Repositorys
{
    public class FeedbackRepository : IFeedbackRepository
    {
        private readonly TriTrainContext _dbContext;
        private readonly string _connection;

        public FeedbackRepository(TriTrainContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _connection = configuration.GetConnectionString("ConnectionString")!;
        }

        public async Task<bool> AddFeedback(Feedback Feedback)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (Feedback == null)
                {
                    return false;
                }

                await _dbContext.Feedbacks.AddAsync(Feedback);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "FeedbackRepository", "AddFeedback");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<bool> DeleteFeedback(int? FeedbackId)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if(FeedbackId == 0)
                {
                    return false;
                }

                Feedback? Feedback = await _dbContext.Feedbacks.FindAsync(FeedbackId);
                if (Feedback == null)
                {
                    return false;
                }
                    _dbContext.Feedbacks.Remove(Feedback);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "FeedbackRepository", "DeleteFeedback");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<List<Feedback>?> GetAllFeedback()
        {
            try
            {
                List<Feedback> Feedback = await _dbContext.Feedbacks.ToListAsync();
                return Feedback;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "FeedbackRepository", "GetAllFeedback");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                return null;
            }
        }

        public async Task<Feedback?> GetFeedbackById(int? FeedbackId)
        {
            try
            {
                if (FeedbackId == null || FeedbackId == 0)
                {
                    return null;
                }

                return await _dbContext.Feedbacks.FindAsync(FeedbackId);
            }
            catch (Exception e)
            {
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "FeedbackRepository", "GetFeedbackById");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return null;
            }
        }

        public async Task<bool> UpdateFeedback(Feedback Feedback)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (Feedback == null)
                {
                    return false;
                }

                _dbContext.Feedbacks.Update(Feedback);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "FeedbackRepository", "UpdateFeedback");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }
    }

}





