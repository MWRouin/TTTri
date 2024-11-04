namespace backend.Repositorys
{
    public interface IInvoiceRepository
    {
        Task<List<Invoice>?> GetAllInvoice();
        Task<Invoice?> GetInvoiceById(int? InvoiceId);
        Task<bool> AddInvoice(Invoice Invoice);
        Task<bool> UpdateInvoice(Invoice Invoice);
        Task<bool> DeleteInvoice(int? InvoiceId);
    }
}


