using Parlor.API.Models.Data;
using Parlor.API.Models.Repository.IRepository;

namespace Parlor.API.Services
{
    public class ClientRegistrationService
    {
        private readonly IClientRegistrationRepository _clientRegistrationRepository;

        public ClientRegistrationService(IClientRegistrationRepository clientRegistrationRepository)
        {
            _clientRegistrationRepository = clientRegistrationRepository;
        }

        public async Task<IEnumerable<ClientRegistration>> GetAllClients()
        {
            return await _clientRegistrationRepository.GetAllClients();
        }

        public async Task<ClientRegistration> GetClientById(int id)
        {
            return await _clientRegistrationRepository.GetClientById(id);
        }

        public async Task<ClientRegistration> AddClient(ClientRegistration client)
        {
            return await _clientRegistrationRepository.AddClient(client);
        }

        public async Task UpdateClient(ClientRegistration client)
        {
            await _clientRegistrationRepository.UpdateClient(client);
        }

        public async Task DeleteClient(int id)
        {
            await _clientRegistrationRepository.DeleteClient(id);
        }
    }
}
