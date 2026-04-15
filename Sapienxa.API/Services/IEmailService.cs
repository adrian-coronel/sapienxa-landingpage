using Sapienxa.API.Models;

namespace Sapienxa.API.Services;

public interface IEmailService
{
    Task SendLeadNotificationAsync(Lead lead);
    Task SendLeadConfirmationAsync(Lead lead);
}
