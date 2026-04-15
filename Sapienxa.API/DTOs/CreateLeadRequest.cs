namespace Sapienxa.API.DTOs;

public record CreateLeadRequest(
    string Nombre,
    string Empresa,
    string Email,
    string Telefono,
    string Pais,
    string Mensaje
);
