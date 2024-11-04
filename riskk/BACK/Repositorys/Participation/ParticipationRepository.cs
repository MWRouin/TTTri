
namespace backend.Repositorys
{
    public class ParticipationRepositroy: IParticipationRepository
    {
        private readonly TriTrainContext _dbContext;
        private readonly string _connection;

        public ParticipationRepositroy(TriTrainContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _connection = configuration.GetConnectionString("ConnectionString")!;
        }

        public async Task<bool> AddParticipation(Participation participation)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (participation == null)
                {
                    return false;
                }

                await _dbContext.Participations.AddAsync(participation);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "ParticipationRepositroy", "AddParticipation");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<bool> DeleteParticipation(int? participationId)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if(participationId == 0)
                {
                    return false;
                }

                Participation? participation = await _dbContext.Participations.FindAsync(participationId);
                if (participation == null)
                {
                    return false;
                }
                    _dbContext.Participations.Remove(participation);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "ParticipationRepositroy", "DeleteParticipation");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<List<Participation>?> GetAllParticipations()
        {
            try
            {
                List<Participation> participations = await _dbContext.Participations.ToListAsync();
                return participations;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "ParticipationRepositroy", "GetAllParticipations");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                return null;
            }
        }

        public async Task<Participation?> GetParticipationById(int? ParticipationId)
        {
            try
            {
                if (ParticipationId == null || ParticipationId == 0)
                {
                    return null;
                }

                return await _dbContext.Participations.FindAsync(ParticipationId);
            }
            catch (Exception e)
            {
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "ParticipationRepositroy", "GetParticipationById");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return null;
            }
        }

        public async Task<bool> UpdateParticipation(Participation participation)
        {
            await using IDbContextTransaction transaction = _dbContext.Database.BeginTransaction();
            try
            {
                if (participation == null)
                {
                    return false;
                }

                _dbContext.Participations.Update(participation);
                await _dbContext.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                ExceptionDb exceptionDb = ExceptionCatch.CreateInstanceExceptionDb(e, "ParticipationRepositroy", "Updateparticipation");
                ExceptionCatch.InsertDataException(_connection, exceptionDb);
                Console.WriteLine(e);
                return false;
            }
        }
    }

}
