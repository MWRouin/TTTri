

namespace backend.Repositorys
{
    public class ResponseRepository : IResponseRepository
    {
        private readonly TriTrainContext _dbContext;
        private readonly string _connection;

        public ResponseRepository(TriTrainContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _connection = configuration.GetConnectionString("ConnectionString")!;
        }

        public async Task<bool> AddResponse(Response Response)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (Response == null)
                {
                    return false;
                }

                await _dbContext.Responses.AddAsync(Response);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "ResponseRepository", "AddResponse");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<bool> DeleteResponse(int? ResponseId)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if(ResponseId == 0)
                {
                    return false;
                }

                Response? Response = await _dbContext.Responses.FindAsync(ResponseId);
                if (Response == null)
                {
                    return false;
                }
                    _dbContext.Responses.Remove(Response);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "ResponseRepository", "DeleteResponse");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<List<Response>?> GetAllResponse()
        {
            try
            {
                List<Response> Response = await _dbContext.Responses.ToListAsync();
                return Response;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "ResponseRepository", "GetAllResponse");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                return null;
            }
        }

        public async Task<Response?> GetResponseById(int? ResponseId)
        {
            try
            {
                if (ResponseId == null || ResponseId == 0)
                {
                    return null;
                }

                return await _dbContext.Responses.FindAsync(ResponseId);
            }
            catch (Exception e)
            {
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "ResponseRepository", "GetResponseById");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return null;
            }
        }

        public async Task<bool> UpdateResponse(Response Response)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (Response == null)
                {
                    return false;
                }

                _dbContext.Responses.Update(Response);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "UserRepository", "UpdateUser");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }
    }

}





