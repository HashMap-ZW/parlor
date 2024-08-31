using Microsoft.AspNetCore.Identity.Data;
using Parlor.API.Models.Data;
using Parlor.API.Models.Local;

namespace Parlor.API.Models.Repository.IRepository;

public interface IAccountRepository
{

    Task<Result<Account>> AddAsync(Account account);
    //Task<Result<Account>> LoginAsync(LoginRequest request);
    //Task<Result<Account>> ChangePasswordAsync(ChangePasswordRequest changePasswordRequest);
    //Task<Result<string>> GetResetPasswordCodeAsync(string email);
    //Task<Result<Account>> ResetPasswordAsync(ResetPasswordRequest resetPasswordRequest);
    //Task<Result<Account>> ConfirmAccountAsync(ConfirmAccountRequest confirmAccountRequest);
    //Task<Result<string>> ResendOtpAsync(string email);
}