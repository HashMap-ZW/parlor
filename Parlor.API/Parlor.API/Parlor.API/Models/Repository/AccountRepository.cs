using Parlor.API.Models.Data;
using Parlor.API.Models.Local;
using Parlor.API.Models.Repository.IRepository;

namespace Parlor.API.Models.Repository;

public class AccountRepository : IAccountRepository
{
    //public Task<Result<Account>> ChangePasswordAsync(ChangePasswordRequest changePasswordRequest)
    //{
    //    throw new NotImplementedException();
    //}

    //public Task<Result<Account>> ConfirmAccountAsync(ConfirmAccountRequest confirmAccountRequest)
    //{
    //    throw new NotImplementedException();
    //}

    //public Task<Result<string>> GetResetPasswordCodeAsync(string email)
    //{
    //    throw new NotImplementedException();
    //}

    //public Task<Result<Account>> LoginAsync(LoginRequest request)
    //{
    //    throw new NotImplementedException();
    //}

    //public Task<Result<string>> ResendOtpAsync(string email)
    //{
    //    throw new NotImplementedException();
    //}

    //public Task<Result<Account>> ResetPasswordAsync(ResetPasswordRequest resetPasswordRequest)
    //{
    //    throw new NotImplementedException();
    //}
    public Task<Result<Account>> AddAsync(Account account)
    {
        throw new NotImplementedException();
    }
}