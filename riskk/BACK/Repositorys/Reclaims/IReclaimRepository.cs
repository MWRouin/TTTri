namespace backend.Repositorys
{
    public interface IReclaimRepository
    {
        Task<List<Reclaim>?> GetAllReclaims();
        Task<Question?> GetReclaimById(int? ReclaimsId);
        Task<bool> AddReclaim(Reclaim Reclaims);
        Task<bool> UpdateReclaim(Reclaim Reclaims);
        Task<bool> DeleteReclaim(int? ReclaimsId);
    }
}


