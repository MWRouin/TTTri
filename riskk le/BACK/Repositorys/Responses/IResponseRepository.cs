namespace backend.Repositorys
{
    public interface IResponseRepository
    {
        Task<List<Response>?> GetAllResponse();
        Task<Response?> GetResponseById(int? ResponseId);
        Task<bool> AddResponse(Response Response);
        Task<bool> UpdateResponse(Response Response);
        Task<bool> DeleteResponse(int? ResponseId);
    }
}


