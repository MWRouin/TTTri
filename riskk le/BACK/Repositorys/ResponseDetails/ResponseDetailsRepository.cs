

namespace backend.Repositorys
{
    public class ResponseDetailRepository : IResponseDetailRepository
    {
        private readonly TriTrainContext _dbContext;
        private readonly string _connection;

        public ResponseDetailRepository(TriTrainContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _connection = configuration.GetConnectionString("ConnectionString")!;
        }

        public async Task<bool> AddResponseDetail(ResponseDetail ResponseDetail)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (ResponseDetail == null)
                {
                    return false;
                }

                await _dbContext.ResponseDetails.AddAsync(ResponseDetail);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "ResponseDetailRepository", "AddResponseDetail");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<bool> DeleteResponseDetail(int? ResponseDetailId)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if(ResponseDetailId == 0)
                {
                    return false;
                }

               ResponseDetail? ResponseDetail = await _dbContext.ResponseDetails.FindAsync(ResponseDetailId);
                if (ResponseDetail == null)
                {
                    return false;
                }
                    _dbContext.ResponseDetails.Remove(ResponseDetail);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "ResponseDetailRepository", "DeleteResponseDetail");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<List<ResponseDetail>?> GetAllResponseDetail()
        {
            try
            {
                List<ResponseDetail> ResponseDetail = await _dbContext.ResponseDetails.ToListAsync();
                return ResponseDetail;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "ResponseDetailRepository", "GetAllResponseDetails");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                return null;
            }
        }

        public async Task<ResponseDetail?> GetResponseDetailById(int? ResponseDetailId)
        {
            try
            {
                if (ResponseDetailId == null || ResponseDetailId == 0)
                {
                    return null;
                }

                return await _dbContext.ResponseDetails.FindAsync(ResponseDetailId);
            }
            catch (Exception e)
            {
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "ResponseDetailRepository", "GetResponseDetailById");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return null;
            }
        }

        public async Task<bool> UpdateResponseDetail(ResponseDetail ResponseDetail)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (ResponseDetail == null)
                {
                    return false;
                }

                _dbContext.ResponseDetails.Update(ResponseDetail);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "ResponseDetailRepository", "UpdateResponseDetail");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }
    }

}





