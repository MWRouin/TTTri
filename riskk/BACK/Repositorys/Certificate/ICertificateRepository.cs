namespace backend.Repositorys
{
    public interface ICertificateRepository
    {
        Task<List<Certificate>?> GetAllCertificate();
        Task<Certificate?> GetCertificateById(int? CertificateId);
        Task<bool> AddCertificate(Certificate Certificate);
        Task<bool> UpdateCertificate(Certificate Certificate);
        Task<bool> DeleteCertificate(int? CertificateId);
    }
}


