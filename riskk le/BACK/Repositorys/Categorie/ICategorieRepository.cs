namespace backend.Repositorys
{
    public interface ICategorierepository
    {
        Task<List<Categorie>?> GetAllCategorie();
        Task<Categorie?> GetCategorieById(int? CategorieId);
        Task<bool> AddCategorie(Categorie Categorie);
        Task<bool> UpdateCategorie(Categorie Categorie);
        Task<bool> DeleteCategorie(int? CategorieId);
    }
}

