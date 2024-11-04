
namespace backend.Repositorys
{
    public class LevelRepository : ILevelsRepository
    {
        private readonly TriTrainContext _dbContext;
        private readonly string _connection;

        public LevelRepository(TriTrainContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _connection = configuration.GetConnectionString("ConnectionString")!;
        }

        public async Task<bool> Addlevel(Level level)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (level == null)
                {
                    return false;
                }

                await _dbContext.Levels.AddAsync(level);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "LevelRepository", "AddLevel");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<bool> DeleteLevel(int? levelId)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if(levelId == 0)
                {
                    return false;
                }

                Level? levels = await _dbContext.Levels.FindAsync(levelId);
                if (levels == null)
                {
                    return false;
                }
                    _dbContext.Levels.Remove(levels);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "LevelRepository", "Deletelevel");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<List<Level>?> GetAllLevels()
        {
            try
            {
                List<Level> levels = await _dbContext.Levels.ToListAsync();
                return levels;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "LevelRepository", "GetAllLevels");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                return null;
            }
        }

        public async Task<Level?> GetLevelById(int? levelId)
        {
            try
            {
                if (levelId == null || levelId == 0)
                {
                    return null;
                }

                return await _dbContext.Levels.FindAsync(levelId);
            }
            catch (Exception e)
            {
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "LevelRepository", "GetLevelById");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return null;
            }
        }

       

        public async Task<bool> UpdateLevel(Level level)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (level == null)
                {
                    return false;
                }

                _dbContext.Levels.Update(level);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "LevelRepository", "UpdateLevel");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }
    }

}
