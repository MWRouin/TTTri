namespace backend.Repositorys
{
    public interface IPaymentRepository
    {
        Task<List<Payment>?> GetAllPayment();
        Task<Payment?> GetPaymentById(int? PaymentId);
        Task<bool> AddPayment(Payment Payment);
        Task<bool> UpdatePayment(Payment Payment);
        Task<bool> DeletePayment(int? PaymentId);
    }
}


