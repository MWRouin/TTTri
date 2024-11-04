

namespace backend.Repositorys
{
    public class EmailConfirmationRepository : IEmailConfirmationRepository
    {
        private readonly TriTrainContext _dbContext;
        private readonly string _connection;

        public EmailConfirmationRepository(TriTrainContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _connection = configuration.GetConnectionString("ConnectionString")!;
        }

        public async Task<bool> AddEmailConfirmation(EmailConfirmation EmailConfirmation)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (EmailConfirmation == null)
                {
                    return false;
                }

                await _dbContext.EmailConfirmations.AddAsync(EmailConfirmation);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "EmailConfirmationRepository", "AddEmailConfirmation");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<bool> DeleteEmailConfirmation(int? EmailConfirmationId)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if(EmailConfirmationId == 0)
                {
                    return false;
                }

                EmailConfirmation? EmailConfirmation = await _dbContext.EmailConfirmations.FindAsync(EmailConfirmationId);
                if (EmailConfirmation == null)
                {
                    return false;
                }
                    _dbContext.EmailConfirmations.Remove(EmailConfirmation);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "EmailConfirmationRepository", "DeleteEmailConfirmation");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<List<EmailConfirmation>?> GetAllEmailConfirmation()
        {
            try
            {
                List<EmailConfirmation> EmailConfirmation = await _dbContext.EmailConfirmations.ToListAsync();
                return EmailConfirmation;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "EmailConfirmationRepository", "GetAllEmailConfirmation");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                return null;
            }
        }

        public async Task<EmailConfirmation?> GetEmailConfirmationById(int? EmailConfirmationId)
        {
            try
            {
                if (EmailConfirmationId == null || EmailConfirmationId == 0)
                {
                    return null;
                }

                return await _dbContext.EmailConfirmations.FindAsync(EmailConfirmationId);
            }
            catch (Exception e)
            {
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "EmailConfirmationRepository", "GetEmailConfirmationById");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return null;
            }
        }

        public async Task<bool> UpdateEmailConfirmation(EmailConfirmation EmailConfirmation)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (EmailConfirmation == null)
                {
                    return false;
                }

                _dbContext.EmailConfirmations.Update(EmailConfirmation);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "EmailConfirmationRepository", "UpdateEmailConfirmation");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }
    }

}





