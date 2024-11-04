namespace backend.Repositorys
{
    public interface IRolesrepository
    {
        Task<List<Role>?> GetAllRoles();
        Task<Role?> GetRoleById(int? RoleId);
        Task<Role?> GetRoleByDescription(string description);
        Task<bool> AddRole(Role Role);
        Task<bool> UpdateRole(Role Role);
        Task<bool> DeleteRole(int? RoleId);
    }
}