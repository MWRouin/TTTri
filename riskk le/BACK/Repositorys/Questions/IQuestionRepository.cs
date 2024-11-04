namespace backend.Repositorys
{
    public interface IQuestionsRepository
    {
        Task<List<Question>?> GetAllQuestions();
        Task<Question?> GetQuestionsById(int? QuestionsId);
        Task<bool> AddQuestions(Question Questions);
        Task<bool> UpdateQuestions(Question Questions);
        Task<bool> DeleteQuestions(int? QuestionsId);
    }
}


