

namespace backend.Repositorys
{
    public class PaymentRepository : IPaymentRepository
    {
        private readonly TriTrainContext _dbContext;
        private readonly string _connection;

        public PaymentRepository(TriTrainContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _connection = configuration.GetConnectionString("ConnectionString")!;
        }

        public async Task<bool> AddPayment(Payment Payment)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (Payment == null)
                {
                    return false;
                }

                await _dbContext.Payments.AddAsync(Payment);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "PaymentRepository", "AddPayment");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<bool> DeletePayment(int? PaymentId)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if(PaymentId == 0)
                {
                    return false;
                }

                Payment? Payment = await _dbContext.Payments.FindAsync(PaymentId);
                if (Payment == null)
                {
                    return false;
                }
                    _dbContext.Payments.Remove(Payment);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "PaymentRepository", "DeletePayment");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<List<Payment>?> GetAllPayment()
        {
            try
            {
                List<Payment> Payment = await _dbContext.Payments.ToListAsync();
                return Payment;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "PaymentRepository", "GetAllPayment");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                return null;
            }
        }

        public async Task<Payment?> GetPaymentById(int? PaymentId)
        {
            try
            {
                if (PaymentId == null || PaymentId == 0)
                {
                    return null;
                }

                return await _dbContext.Payments.FindAsync(PaymentId);
            }
            catch (Exception e)
            {
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "PaymentRepository", "GetPaymentById");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return null;
            }
        }

        public async Task<bool> UpdatePayment(Payment Payment)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (Payment == null)
                {
                    return false;
                }

                _dbContext.Payments.Update(Payment);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "PaymentRepository", "UpdatePayment");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }
    }

}





