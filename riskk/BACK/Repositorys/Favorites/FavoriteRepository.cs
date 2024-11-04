

namespace backend.Repositorys
{
    public class FavoriteRepository : IFavoriteRepository
    {
        private readonly TriTrainContext _dbContext;
        private readonly string _connection;

        public FavoriteRepository(TriTrainContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _connection = configuration.GetConnectionString("ConnectionString")!;
        }

        public async Task<Favorite?> AddFavorite(Favorite Favorite)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                await _dbContext.Favorites.AddAsync(Favorite);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return Favorite;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "FavoriteRepository", "AddFavorite");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return null;
            }
        }

        public async Task<bool> DeleteFavorite(int? FavoriteId)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if(FavoriteId == 0)
                {
                    return false;
                }

                Favorite? Favorite = await _dbContext.Favorites.FindAsync(FavoriteId);
                if (Favorite == null)
                {
                    return false;
                }
                    _dbContext.Favorites.Remove(Favorite);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "FavoriteRepository", "DeleteFavorite");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<List<Favorite>?> GetAllFavorite()
        {
            try
            {
                List<Favorite> Favorite = await _dbContext.Favorites.ToListAsync();
                return Favorite;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "FavoriteRepository", "GetAllFavorite");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                return null;
            }
        }

    }

}





