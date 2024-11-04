
using Microsoft.EntityFrameworkCore.Storage;

namespace backend.Repositorys
{
    public class Categorierepository : ICategorierepository
    {
        private readonly TriTrainContext newDbContext;
        private readonly string _connection;
        public Categorierepository(TriTrainContext _newDbContext, IConfiguration configuration)
        {

            newDbContext = _newDbContext;
            _connection = configuration.GetConnectionString("ConnectionString")!;
        }

        public async Task<bool> AddCategorie(Categorie Categorie)
        {
            await using IDbContextTransaction transaction = newDbContext.Database.BeginTransaction();
            try
            {
                if (Categorie == null)
                {
                    return false;
                }
                await newDbContext.Categories.AddAsync(Categorie);
                await newDbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;

            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "Categorierepository", "AddCategorie");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<bool> DeleteCategorie(int? CategorieId)
        {
            await using IDbContextTransaction transaction = newDbContext.Database.BeginTransaction();
            try
            {
                if (CategorieId == 0)
                {
                    return false;
                }
                Categorie? Categorie = await newDbContext.Categories.FindAsync(CategorieId);
                if (Categorie == null)
                {
                    return false;
                }
                newDbContext.Categories.Remove(Categorie);

                await newDbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "Categorierepository", "DeleteCategorie");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e); // developement
                return false;
            }
        }

        public async Task<List<Categorie>?> GetAllCategorie()
        {
            try
            {
                List<Categorie> Categorie = new List<Categorie>();
                Categorie = await newDbContext.Categories.ToListAsync();
                return Categorie;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "Categorierepository", "GetAllCategorie");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                return null;
            }
        }

        public async Task<Categorie?> GetCategorieById(int? CategorieId)
        {
            try
            {
                if (CategorieId == 0)
                {
                    return null;
                }
                Categorie? Categorie = await newDbContext.Categories.FindAsync(CategorieId);
                if (Categorie == null)
                {
                    return null;
                }
                return Categorie;
            }
            catch (Exception e)
            {
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "Categorierepository", "GetCategorieById");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return null;
            }

        }

        public async Task<bool> UpdateCategorie(Categorie Categorie)
        {
            await using IDbContextTransaction transaction = newDbContext.Database.BeginTransaction();
            try
            {
                if (Categorie == null)
                {
                    return false;
                }
                newDbContext.Categories.Update(Categorie);
                await newDbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "Categorierepository", "UpdateCategorie");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }

        }
    }
}