namespace backend.Repositorys
{
    public interface IUsersRepository
    {   Task<List<User>?> GetUsers();
        Task<User> GetUserWithRole(int userId);
        Task<User?> GetUserByID(int Id);
        Task<User?> GetUserByEmail(string email);
        Task<IEnumerable<User>> GetUsersByRole(int roleId);

        Task<bool> AddUser(User user);
        Task<bool> DeleteUser(int Id);
        Task<User?> UpdatetUser(User user);
        Task<User?> Login(string username, string password);
        Task<User?> GetUserByUserEmailrefreshToken(string username, string refreshToken);

    }
}


