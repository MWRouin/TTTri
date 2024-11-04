

namespace backend.Repositorys
{
    public class PaymentMethodeRepository : IPaymentMethodeRepository
    {
        private readonly TriTrainContext _dbContext;
        private readonly string _connection;

        public PaymentMethodeRepository(TriTrainContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _connection = configuration.GetConnectionString("ConnectionString")!;
        }

        public async Task<bool> AddPaymentMethode(PaymentMethode PaymentMethode)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (PaymentMethode == null)
                {
                    return false;
                }

                await _dbContext.PaymentMethodes.AddAsync(PaymentMethode);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "PaymentMethodeRepository", "AddPaymentMethode");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<bool> DeletePaymentMethode(int? PaymentMethodeId)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if(PaymentMethodeId == 0)
                {
                    return false;
                }

                PaymentMethode? PaymentMethode = await _dbContext.PaymentMethodes.FindAsync(PaymentMethodeId);
                if (PaymentMethode == null)
                {
                    return false;
                }
                    _dbContext.PaymentMethodes.Remove(PaymentMethode);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "PaymentMethodeRepository", "DeletePaymentMethode");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<List<PaymentMethode>?> GetAllPaymentMethode()
        {
            try
            {
                List<PaymentMethode> PaymentMethode = await _dbContext.PaymentMethodes.ToListAsync();
                return PaymentMethode;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "PaymentMethodeRepository", "GetAllPaymentMethode");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                return null;
            }
        }

        public async Task<PaymentMethode?> GetPaymentMethodeById(int? PaymentMethodeId)
        {
            try
            {
                if (PaymentMethodeId == null || PaymentMethodeId == 0)
                {
                    return null;
                }

                return await _dbContext.PaymentMethodes.FindAsync(PaymentMethodeId);
            }
            catch (Exception e)
            {
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "PaymentMethodeRepository", "GetPaymentMethodeById");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return null;
            }
        }

        public async Task<bool> UpdatePaymentMethode(PaymentMethode PaymentMethode)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (PaymentMethode == null)
                {
                    return false;
                }

                _dbContext.PaymentMethodes.Update(PaymentMethode);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "PaymentMethodeRepository", "UpdatePaymentMethode");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }
    }

}





