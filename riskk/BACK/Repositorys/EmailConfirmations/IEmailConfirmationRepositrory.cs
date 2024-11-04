namespace backend.Repositorys
{
    public interface IEmailConfirmationRepository
    {
        Task<List<EmailConfirmation>?> GetAllEmailConfirmation();
        Task<EmailConfirmation?> GetEmailConfirmationById(int? EmailConfirmationId);
        Task<bool> AddEmailConfirmation(EmailConfirmation EmailConfirmation);
        Task<bool> UpdateEmailConfirmation(EmailConfirmation EmailConfirmation);
        Task<bool> DeleteEmailConfirmation(int? EmailConfirmationId);
    }
}


