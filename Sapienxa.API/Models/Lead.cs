namespace Sapienxa.API.Models;

public class Lead
{
    public int Id { get; set; }
    public required string Nombre { get; set; }
    public required string Empresa { get; set; }
    public required string Email { get; set; }
    public required string Telefono { get; set; }
    public required string Pais { get; set; }
    public required string Mensaje { get; set; }
    public DateTime CreadoEn { get; set; } = DateTime.UtcNow;
}
