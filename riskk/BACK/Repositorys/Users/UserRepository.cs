

namespace backend.Repositorys
{
    public class UserRepository : IUsersRepository
    {
        private readonly TriTrainContext _dbContext;
        private readonly string _connection;

        public UserRepository(TriTrainContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _connection = configuration.GetConnectionString("ConnectionString")!;
        }
                public async Task<List<User>?> GetUsers()
        {
            try
            {
                List<User> LUserdb = await _dbContext.Users
                   
                    .ToListAsync();

                return LUserdb;
            }
            catch (Exception e)
            {
                Console.WriteLine($"Une exception s'est produite lors de la récupération des utilisateurs : {e.Message}");
                // Vous pouvez gérer l'exception selon vos besoins, comme enregistrer dans un journal, envoyer une notification, etc.
                return null;
            }
        }

        public async Task<User> GetUserWithRole(int userId)
        {
            return await _dbContext.Users
                .Include(u => u.Role) // Include the Role in the query
                .FirstOrDefaultAsync(u => u.UserId == userId);
        }

        public async Task<User?> GetUserByID(int Id)
        {
            try
            {
                User? user = await _dbContext.Users
                    .FirstOrDefaultAsync(u => u.UserId == Id);

                return user;
            }
            catch (Exception e)
            {
                Console.WriteLine($"Une exception s'est produite lors de la récupération de l'utilisateur par ID : {e.Message}");
                // Gérer l'exception selon vos besoins
                return null;
            }
        }
        public async Task<User?> GetUserByEmail(string email)
        {
            try
            {
                User? user = await _dbContext.Users
                    .FirstOrDefaultAsync(u => u.Email == email);

                return user;
            }
            catch (Exception e)
            {
                Console.WriteLine($"Une exception s'est produite lors de la récupération de l'utilisateur par email : {e.Message}");
                // Gérer l'exception selon vos besoins
                return null;
            }
        }

        public async Task<IEnumerable<User>> GetUsersByRole(int roleId)
        {
            try
            {
                var usersByRole = await _dbContext.Users
                    .Where(u => u.RoleId == roleId)
                    .ToListAsync();

                return usersByRole;
            }
            catch (Exception e)
            {
                Console.WriteLine($"Une exception s'est produite lors de la récupération des utilisateurs par rôle : {e.Message}");
                // Gérer l'exception selon vos besoins
                return Enumerable.Empty<User>();
            }
        }

        public async Task<bool> AddUser(User user)
        {
            try
            {
                if (user == null) 
                return false;
                await _dbContext.Users.AddAsync(user);
                await _dbContext.SaveChangesAsync();
                return true;            }
            catch (Exception e)
            {
                Console.WriteLine($"Une exception s'est produite lors de l'ajout de l'utilisateur : {e.Message}");
                // Gérer l'exception selon vos besoins
                return false;   
            }
        }

        public async Task<bool> DeleteUser(int Id)
        {
            try 
            {
                User? user = await _dbContext.Users.FindAsync(Id);
                if (user == null) return false;
                _dbContext.Users.Remove(user);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                Console.WriteLine($"Une exception s'est produite lors de la suppression de l'utilisateur : {e.Message}");
                // Gérer l'exception selon vos besoins
                return false;
            }
        }

        public async Task<User?> UpdatetUser(User user)
        {
            try
            {
                if (user == null) return null;
                _dbContext.Users.Update(user);
                await _dbContext.SaveChangesAsync();
                return user;
            }
            catch (Exception e)
            {
                Console.WriteLine($"Une exception s'est produite lors de la mise à jour de l'utilisateur : {e.Message}");
                // Gérer l'exception selon vos besoins
                return null;
            }
        }

   
        public async Task<User?> Login(string username, string password)
        {
            try
            {
                User? user = await _dbContext.Users
                    .Where(x => x.Email == username && x.Password == password)
                    .FirstOrDefaultAsync();
                user.Role =  await _dbContext.Roles.FindAsync(user.RoleId);
                return user;
            }
            catch (Exception e)
            {
                Console.WriteLine($"Une exception s'est produite lors de la connexion de l'utilisateur : {e.Message}");
                // Gérer l'exception selon vos besoins
                return null;
            }
        }

        public async Task<User?> GetUserByUserEmailrefreshToken(string username, string refreshToken)
        {
            try
            {
                User? user = await _dbContext.Users
                    .Where(x => x.Email == username && x.RefreshToken == refreshToken)
                    .FirstOrDefaultAsync();

                return user;
            }
            catch (Exception e)
            {
                Console.WriteLine($"Une exception s'est produite lors de la récupération de l'utilisateur par email et refreshToken : {e.Message}");
                // Gérer l'exception selon vos besoins
                return null;
            }
        }


    }

}





