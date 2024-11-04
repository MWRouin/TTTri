

namespace backend.Repositorys
{
    public class CertificateRepository : ICertificateRepository
    {
        private readonly TriTrainContext _dbContext;
        private readonly string _connection;

        public CertificateRepository(TriTrainContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _connection = configuration.GetConnectionString("ConnectionString")!;
        }

        public async Task<bool> AddCertificate(Certificate Certificate)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (Certificate == null)
                {
                    return false;
                }

                await _dbContext.Certificates.AddAsync(Certificate);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "CertificateRepository", "AddCertificate");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<bool> DeleteCertificate(int? CertificateId)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if(CertificateId == 0)
                {
                    return false;
                }

                Certificate? Certificate = await _dbContext.Certificates.FindAsync(CertificateId);
                if (Certificate == null)
                {
                    return false;
                }
                    _dbContext.Certificates.Remove(Certificate);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "CertificateRepository", "DeleteCertificate");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<List<Certificate>?> GetAllCertificate()
        {
            try
            {
                List<Certificate> Certificate = await _dbContext.Certificates.ToListAsync();
                return Certificate;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "CertificateRepository", "GetAllCertificate");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                return null;
            }
        }

        public async Task<Certificate?> GetCertificateById(int? CertificateId)
        {
            try
            {
                if (CertificateId == null || CertificateId == 0)
                {
                    return null;
                }

                return await _dbContext.Certificates.FindAsync(CertificateId);
            }
            catch (Exception e)
            {
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "CertificateRepository", "GetUCertificateById");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return null;
            }
        }

        public async Task<bool> UpdateCertificate(Certificate Certificate)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (Certificate == null)
                {
                    return false;
                }

                _dbContext.Certificates.Update(Certificate);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "CertificateRepository", "UpdateCertificate");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }
    }

}





