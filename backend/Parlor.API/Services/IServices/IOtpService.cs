namespace Parlor.API.Services.IServices;

public interface IOtpService
{
    Task<string> GenerateOtpCode();
}