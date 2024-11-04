namespace backend.Repositorys
{
    public interface IPaymentMethodeRepository
    {
        Task<List<PaymentMethode>?> GetAllPaymentMethode();
        Task<PaymentMethode?> GetPaymentMethodeById(int? PaymentMethodeId);
        Task<bool> AddPaymentMethode(PaymentMethode PaymentMethode);
        Task<bool> UpdatePaymentMethode(PaymentMethode PaymentMethode);
        Task<bool> DeletePaymentMethode(int? PaymentMethodeId);
    }
}


