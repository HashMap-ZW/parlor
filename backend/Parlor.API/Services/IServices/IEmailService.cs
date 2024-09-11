using Parlor.API.Models.Local;

namespace Parlor.API.Services.IServices;

public interface IEmailService
{
    Task<Result<bool>> SendEmailAsync(EmailRequest email);
}