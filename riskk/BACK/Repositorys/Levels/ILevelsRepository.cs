namespace backend.Repositorys
{
    public interface ILevelsRepository
    {
        Task<List<Level>?> GetAllLevels();
        Task<Level?> GetLevelById(int? LevelId);
        Task<bool> Addlevel(Level level);
        Task<bool> UpdateLevel(Level level);
        Task<bool> DeleteLevel(int? LevelId);
    }
}


