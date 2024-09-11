using Microsoft.EntityFrameworkCore;
using Parlor.API.Models.Data;
using Parlor.API.Models.Repository.IRepository;

namespace Parlor.API.Models.Repository
{
    public class ClientRegistrationRepository : IClientRegistrationRepository
    {
        private readonly AppDbContext _context;

        public ClientRegistrationRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<ClientRegistration> AddClient(ClientRegistration client)
        {
            _context.ClientRegistrations.Add(client);
            await _context.SaveChangesAsync();
            return client;
        }

        public async Task DeleteClient(int id)
        {
            var client = await _context.ClientRegistrations.FindAsync(id);
            if (client != null)
            {
                _context.ClientRegistrations.Remove(client);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<ClientRegistration>> GetAllClients()
        {
            return await _context.ClientRegistrations.ToListAsync();
        }

        public async Task<ClientRegistration> GetClientById(int id)
        {
            return await _context.ClientRegistrations.FindAsync(id);
        }

        public async Task UpdateClient(ClientRegistration client)
        {
            _context.ClientRegistrations.Update(client);
            await _context.SaveChangesAsync();
        }
    }
}
