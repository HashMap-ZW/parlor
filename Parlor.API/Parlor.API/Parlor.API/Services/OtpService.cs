using Parlor.API.Services.IServices;
using System.Text;

namespace Parlor.API.Services
{
    public class OtpService(IConfiguration configuration) : IOtpService
    {
        private readonly IConfiguration _configuration = configuration;
        private readonly Random _rnd = new();

        public Task<string> GenerateOtpCode()
        {
            string chars = _configuration["OtpService:Chars"]!;
            var code = new StringBuilder(6);

            for (int i = 0; i < 6; i++)
            {
                code.Append(chars[_rnd.Next(chars.Length)]);
            }

            return Task.FromResult(code.ToString());
        }
    }
}
