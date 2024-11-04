namespace backend.Repositorys
{
    public interface IResponseDetailRepository
    {
        Task<List<ResponseDetail>?> GetAllResponseDetail();
        Task<ResponseDetail?> GetResponseDetailById(int? ResponseDetailId);
        Task<bool> AddResponseDetail(ResponseDetail ResponseDetail);
        Task<bool> UpdateResponseDetail(ResponseDetail ResponseDetail);
        Task<bool> DeleteResponseDetail(int? ResponseDetailId);
    }
}


