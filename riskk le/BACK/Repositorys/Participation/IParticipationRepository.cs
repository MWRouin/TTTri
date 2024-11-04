namespace backend.Repositorys
{
    public interface IParticipationRepository
    {
        Task<List<Participation>?> GetAllParticipations();
        Task<bool> AddParticipation(Participation participation);
        Task<bool> UpdateParticipation(Participation participation);
        Task<Participation?> GetParticipationById(int? id);
        Task<bool> DeleteParticipation(int? participationId);
    }
}