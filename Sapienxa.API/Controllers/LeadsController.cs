using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using Sapienxa.API.Data;
using Sapienxa.API.DTOs;
using Sapienxa.API.Models;
using Sapienxa.API.Services;

namespace Sapienxa.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LeadsController(
    AppDbContext db,
    IEmailService emailService,
    IValidator<CreateLeadRequest> validator,
    ILogger<LeadsController> logger) : ControllerBase
{
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<IActionResult> Create([FromBody] CreateLeadRequest request)
    {
        var validation = await validator.ValidateAsync(request);
        if (!validation.IsValid)
            return BadRequest(validation.Errors
                .Select(e => new { field = e.PropertyName, message = e.ErrorMessage }));

        var lead = new Lead
        {
            Nombre = request.Nombre,
            Empresa = request.Empresa,
            Email = request.Email,
            Telefono = request.Telefono,
            Pais = request.Pais,
            Mensaje = request.Mensaje,
        };

        try
        {
            db.Leads.Add(lead);
            await db.SaveChangesAsync();
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error guardando lead de {Email}", request.Email);
            return StatusCode(500, new
            {
                message = "Ocurrió un error al procesar tu solicitud. Intenta nuevamente más tarde."
            });
        }

        try
        {
            await Task.WhenAll(
                emailService.SendLeadNotificationAsync(lead),
                emailService.SendLeadConfirmationAsync(lead));
        }
        catch (Exception ex)
        {
            // El lead ya fue guardado — logueamos el error pero devolvemos 201
            logger.LogError(ex, "Error enviando emails para lead {Id}", lead.Id);
        }

        return Created($"/api/leads/{lead.Id}", new { id = lead.Id });
    }
}
