using SendGrid;
using SendGrid.Helpers.Mail;
using Sapienxa.API.Models;

namespace Sapienxa.API.Services;

public class EmailService(
    ISendGridClient sendGridClient,
    IConfiguration configuration,
    ILogger<EmailService> logger) : IEmailService
{
    public async Task SendLeadNotificationAsync(Lead lead)
    {
        var from = new EmailAddress(
            configuration["SendGrid:FromEmail"],
            configuration["SendGrid:FromName"]);
        var to = new EmailAddress(configuration["SendGrid:NotificationEmail"]);
        var subject = $"Nuevo lead: {lead.Nombre} — {lead.Empresa}";
        var body = $"""
            Nuevo lead recibido:

            Nombre:   {lead.Nombre}
            Empresa:  {lead.Empresa}
            Email:    {lead.Email}
            Teléfono: {lead.Telefono}
            País:     {lead.Pais}

            Mensaje:
            {lead.Mensaje}
            """;

        var msg = MailHelper.CreateSingleEmail(from, to, subject, body, null);
        var response = await sendGridClient.SendEmailAsync(msg);

        if (!response.IsSuccessStatusCode)
            logger.LogWarning("SendGrid notificación devolvió {StatusCode}", response.StatusCode);
    }

    public async Task SendLeadConfirmationAsync(Lead lead)
    {
        var from = new EmailAddress(
            configuration["SendGrid:FromEmail"],
            configuration["SendGrid:FromName"]);
        var to = new EmailAddress(lead.Email, lead.Nombre);
        var subject = "Recibimos tu mensaje — Sapienxa";
        var body = $"""
            Hola {lead.Nombre},

            Gracias por contactarnos. Recibimos tu mensaje y te responderemos en menos de 24 horas.

            El equipo de Sapienxa
            """;

        var msg = MailHelper.CreateSingleEmail(from, to, subject, body, null);
        var response = await sendGridClient.SendEmailAsync(msg);

        if (!response.IsSuccessStatusCode)
            logger.LogWarning("SendGrid confirmación devolvió {StatusCode}", response.StatusCode);
    }
}
