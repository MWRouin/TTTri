

namespace backend.Repositorys
{
    public class InvoiceRepository : IInvoiceRepository
    {
        private readonly TriTrainContext _dbContext;
        private readonly string _connection;

        public InvoiceRepository(TriTrainContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _connection = configuration.GetConnectionString("ConnectionString")!;
        }

        public async Task<bool> AddInvoice(Invoice Invoice)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (Invoice == null)
                {
                    return false;
                }

                await _dbContext.Invoices.AddAsync(Invoice);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "InvoiceRepository", "AddInvoice");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<bool> DeleteInvoice(int? InvoiceId)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if(InvoiceId == 0)
                {
                    return false;
                }

                Invoice? Invoice = await _dbContext.Invoices.FindAsync(InvoiceId);
                if (Invoice == null)
                {
                    return false;
                }
                    _dbContext.Invoices.Remove(Invoice);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "InvoiceRepository", "DeleteInvoice");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<List<Invoice>?> GetAllInvoice()
        {
            try
            {
                List<Invoice> Feedback = await _dbContext.Invoices.ToListAsync();
                return Feedback;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "InvoiceRepository", "GetAllInvoice");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                return null;
            }
        }

        public async Task<Invoice?> GetInvoiceById(int? InvoiceId)
        {
            try
            {
                if (InvoiceId == null || InvoiceId == 0)
                {
                    return null;
                }

                return await _dbContext.Invoices.FindAsync(InvoiceId);
            }
            catch (Exception e)
            {
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "InvoiceRepository", "GetInvoiceById");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return null;
            }
        }

        public async Task<bool> UpdateInvoice(Invoice Invoice)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (Invoice == null)
                {
                    return false;
                }

                _dbContext.Invoices.Update(Invoice);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "InvoiceRepository", "UpdateFeedback");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }
    }

}






