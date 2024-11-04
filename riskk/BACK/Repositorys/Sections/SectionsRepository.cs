namespace backend.Repositorys
{
    public class SectionRepository : ISectionsRepository
    {
        private readonly TriTrainContext _dbContext;
        private readonly string _connection;

        public SectionRepository(TriTrainContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _connection = configuration.GetConnectionString("ConnectionString")!;
        }

        public async Task<bool> AddSection(Section Section)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (Section == null)
                {
                    return false;
                }

                await _dbContext.Sections.AddAsync(Section);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "SectionRepository", "AddSection");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<bool> DeleteSection(int? SectionId)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if(SectionId == 0)
                {
                    return false;
                }

                Section? Section = await _dbContext.Sections.FindAsync(SectionId);
                if (Section == null)
                {
                    return false;
                }
                _dbContext.Sections.Remove(Section);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "SectionRepository", "DeleteSection");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<List<Section>?> GetAllSections()
        {
            try
            {
                List<Section> Sections = await _dbContext.Sections.ToListAsync();
                return Sections;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "SectionRepository", "GetAllSections");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                return null;
            }
        }

        public async Task<Section?> GetSectionById(int? SectionId)
        {
            try
            {
                if (SectionId == null || SectionId == 0)
                {
                    return null;
                }

                return await _dbContext.Sections.FindAsync(SectionId);
            }
            catch (Exception e)
            {
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "SectionRepository", "GetSectionById");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return null;
            }
        }

        public async Task<bool> UpdateSection(Section Section)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (Section == null)
                {
                    return false;
                }

                _dbContext.Sections.Update(Section);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "SectionRepository", "UpdateSection");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }
    }
}
