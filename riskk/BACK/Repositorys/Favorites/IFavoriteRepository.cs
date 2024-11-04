namespace backend.Repositorys
{
    public interface IFavoriteRepository
    {
        Task<List<Favorite>?> GetAllFavorite();
        Task<Favorite?> AddFavorite(Favorite Favorite);
        Task<bool> DeleteFavorite(int? FavoriteId);
    }
}


