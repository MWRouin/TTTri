namespace backend.Repositorys
{
    public interface ISectionsRepository
    {
        Task<List<Section>?> GetAllSections();
        Task<Section?> GetSectionById(int? SectionId);
        Task<bool> AddSection(Section Section);
        Task<bool> UpdateSection(Section Section);
        Task<bool> DeleteSection(int? SectionId);
    }
}
