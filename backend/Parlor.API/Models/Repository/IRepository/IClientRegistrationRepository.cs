using Parlor.API.Models.Data;

namespace Parlor.API.Models.Repository.IRepository
{
    public interface IClientRegistrationRepository
    {
        Task<IEnumerable<ClientRegistration>> GetAllClients();
        Task<ClientRegistration> GetClientById(int id);
        Task<ClientRegistration> AddClient(ClientRegistration client);
        Task UpdateClient(ClientRegistration client);
        Task DeleteClient(int id);
    }
}
