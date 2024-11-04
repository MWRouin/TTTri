namespace backend.Repositorys
{
    public interface ITestesRepository
    {
        Task<List<Test>?> GetAllTests();
        Task<Test?> GetTestById(int? TestId);
        Task<bool> AddTest(Test test);
        Task<bool> UpdateTest(Test test);
        Task<bool> DeleteTest(int? TestId);
    }
}
