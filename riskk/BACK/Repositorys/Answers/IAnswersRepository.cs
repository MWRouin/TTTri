namespace backend.Repositorys
{
    public interface IAnswersRepository
    {
        Task<List<Answer>?> GetAllAnswers();
        Task<Answer?> GetAnswersById(int? AnswersId);
        Task<bool> AddAnswers(Answer Answers);
        Task<bool> UpdateAnswers(Answer Answers);
        Task<bool> DeleteAnswers(int? AnswersId);
    }
}


