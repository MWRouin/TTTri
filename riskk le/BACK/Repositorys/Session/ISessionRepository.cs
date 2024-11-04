namespace backend.Repositorys
{
    public interface ISessionRepository
    {
        Task<List<Session>?> GetAllSession();
        Task<Session?> GetSessionById(int? SessionId);
        Task<bool> AddSession(Session Session);
        Task<bool> UpdateSession(Session Session);
        Task<bool> DeleteSession(int? SessionId);
    }
}


