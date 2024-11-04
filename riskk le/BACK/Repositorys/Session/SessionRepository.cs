

namespace backend.Repositorys
{
    public class SessionRepository : ISessionRepository
    {
        private readonly TriTrainContext _dbContext;
        private readonly string _connection;

        public SessionRepository(TriTrainContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _connection = configuration.GetConnectionString("ConnectionString")!;
        }

        public async Task<bool> AddSession(Session Session)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (Session == null)
                {
                    return false;
                }

                await _dbContext.Sessions.AddAsync(Session);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "SessionRepository", "AddSession");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<bool> DeleteSession(int? SessionId)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if(SessionId == 0)
                {
                    return false;
                }

                Session? Session = await _dbContext.Sessions.FindAsync(SessionId);
                if (Session == null)
                {
                    return false;
                }
                    _dbContext.Sessions.Remove(Session);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "SessionRepository", "DeleteSession");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<List<Session>?> GetAllSession()
        {
            try
            {
                List<Session> Session = await _dbContext.Sessions.ToListAsync();
                return Session;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "SessionRepository", "GetAllSession");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                return null;
            }
        }

        public async Task<Session?> GetSessionById(int? SessionId)
        {
            try
            {
                if (SessionId == null || SessionId == 0)
                {
                    return null;
                }

                return await _dbContext.Sessions.FindAsync(SessionId);
            }
            catch (Exception e)
            {
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "SessionRepository", "GetSessionById");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return null;
            }
        }

        public async Task<bool> UpdateSession(Session Session)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (Session == null)
                {
                    return false;
                }

                _dbContext.Sessions.Update(Session);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "SessionRepository", "UpdateSession");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }
      
    }

}





