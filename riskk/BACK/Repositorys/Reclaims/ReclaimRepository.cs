
namespace backend.Repositorys
{
    public class ReclaimRepositroy :  IReclaimRepository
    {
        private readonly TriTrainContext _dbContext;
        private readonly string _connection;

        public ReclaimRepositroy(TriTrainContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _connection = configuration.GetConnectionString("ConnectionString")!;
        }

        public async Task<bool> AddReclaim(Reclaim Reclaim)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (Reclaim == null)
                {
                    return false;
                }

                await _dbContext.Reclaims.AddAsync(Reclaim);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "ReclaimRepositroy", "AddReclaim");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<bool> DeleteReclaim(int? ReclaimId)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if(ReclaimId == 0)
                {
                    return false;
                }

                Reclaim? Reclaim = await _dbContext.Reclaims.FindAsync(ReclaimId);
                if (Reclaim == null)
                {
                    return false;
                }
                    _dbContext.Reclaims.Remove(Reclaim);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "ReclaimRepositroy", "DeleteReclaim");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<List<Reclaim>?> GetAllReclaims()
        {
            try
            {
                List<Reclaim> Reclaims = await _dbContext.Reclaims.ToListAsync();
                return Reclaims;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "ReclaimRepositroy", "GetAllReclaims");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                return null;
            }
        }

        public async Task<Reclaim?> GetReclaimById(int? ReclaimId)
        {
            try
            {
                if (ReclaimId == null || ReclaimId == 0)
                {
                    return null;
                }

                return await _dbContext.Reclaims.FindAsync(ReclaimId);
            }
            catch (Exception e)
            {
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "ReclaimRepositroy", "GetReclaimById");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return null;
            }
        }

        public async Task<bool> UpdateReclaim(Reclaim Reclaim)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (Reclaim == null)
                {
                    return false;
                }

                _dbContext.Reclaims.Update(Reclaim);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "ReclaimRepositroy", "UpdateReclaim");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        Task<Question?> IReclaimRepository.GetReclaimById(int? ReclaimsId)
        {
            throw new NotImplementedException();
        }
    }

}
