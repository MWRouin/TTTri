
using Microsoft.EntityFrameworkCore.Storage;

namespace backend.Repositorys
{
    public class Rolesrepository : IRolesrepository
    {
        private readonly TriTrainContext newDbContext;
        private readonly string _connection;
        public Rolesrepository(TriTrainContext _newDbContext, IConfiguration configuration)
        {

            newDbContext = _newDbContext;
            _connection = configuration.GetConnectionString("ConnectionString")!;
        }

        public async Task<bool> AddRole(Role Role)
        {
            await using IDbContextTransaction transaction = newDbContext.Database.BeginTransaction();
            try
            {
                if (Role == null)
                {
                    return false;
                }
                await newDbContext.Roles.AddAsync(Role);
                await newDbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;

            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "Rolesrepository", "AddRole");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<bool> DeleteRole(int? RoleId)
        {
            await using IDbContextTransaction transaction = newDbContext.Database.BeginTransaction();
            try
            {
                if (RoleId == 0)
                {
                    return false;
                }
                Role? role = await newDbContext.Roles.FindAsync(RoleId);
                if (role == null)
                {
                    return false;
                }
                newDbContext.Roles.Remove(role);

                await newDbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "Rolesrepository", "DeleteRole");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e); // developement
                return false;
            }
        }

        public async Task<List<Role>?> GetAllRoles()
        {
            try
            {
                List<Role> Lroles = new List<Role>();
                Lroles = await newDbContext.Roles.ToListAsync();
                return Lroles;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "Rolesrepository", "GetAllRoles");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                return null;
            }
        }

        public async Task<Role?> GetRoleById(int? RoleId)
        {
            try
            {
                if (RoleId == 0)
                {
                    return null;
                }
                Role? role = await newDbContext.Roles.FindAsync(RoleId);
                if (role == null)
                {
                    return null;
                }
                return role;
            }
            catch (Exception e)
            {
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "Rolesrepository", "GetRoleById");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return null;
            }

        }

        public async Task<Role?> GetRoleByDescription(string description)
        {
            try
            {
                // Ensure the description is not null
                if (string.IsNullOrEmpty(description))
                {
                    return null;
                }

                // Retrieve the role based on description (case insensitive)
                Role? role = await newDbContext.Roles
                    .FirstOrDefaultAsync(r => r.Description.ToLower() == description.ToLower());

                return role;
            }
            catch (Exception e)
            {
                // Handle exception (you can log this exception or handle it as needed)
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "RolesRepository", "GetRoleByDescription");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return null; // Return null in case of exception
            }
        }

        public async Task<bool> UpdateRole(Role Role)
        {
            await using IDbContextTransaction transaction = newDbContext.Database.BeginTransaction();
            try
            {
                if (Role == null)
                {
                    return false;
                }
                newDbContext.Roles.Update(Role);
                await newDbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "Rolesrepository", "UpdateRole");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }

        }
    }
}