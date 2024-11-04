namespace backend.Repositorys
{
    public interface IFeedbackRepository
    {
        Task<List<Feedback>?> GetAllFeedback();
        Task<Feedback?> GetFeedbackById(int? FeedbackId);
        Task<bool> AddFeedback(Feedback Feedback);
        Task<bool> UpdateFeedback(Feedback Feedback);
        Task<bool> DeleteFeedback(int? FeedbackId);
    }
}


