# Sapienxa API

Backend ASP.NET Core 8 para el formulario de leads de la landing page Sapienxa.

## Stack

- .NET 8 / ASP.NET Core
- Entity Framework Core + PostgreSQL (Npgsql)
- FluentValidation
- SendGrid (emails)
- Swagger/OpenAPI

## Configuración requerida

Antes de ejecutar, edita los placeholders en `appsettings.Development.json`:

| Clave | Descripción |
|-------|-------------|
| `ConnectionStrings:DefaultConnection` | Connection string a tu instancia PostgreSQL local |
| `SendGrid:ApiKey` | API Key de SendGrid (Settings → API Keys) |
| `SendGrid:FromEmail` | Email remitente verificado en SendGrid |
| `SendGrid:FromName` | Nombre del remitente (ej. "Sapienxa") |
| `SendGrid:NotificationEmail` | Email donde recibes notificaciones de nuevos leads |

Para producción, configura las mismas claves en `appsettings.json` o vía variables de entorno.

## Setup local

### 1. Base de datos

Crea la base de datos en PostgreSQL:

```sql
CREATE DATABASE sapienxa_dev;
```

Aplica la migración:

```bash
dotnet ef database update
```

### 2. Ejecutar la API

```bash
dotnet run
```

La API queda disponible en:
- HTTP: `http://localhost:5173`
- HTTPS: `https://localhost:7204`
- Swagger: `http://localhost:5173/swagger`

## Endpoints

### POST /api/leads

Recibe el formulario de contacto y:
1. Valida los campos con FluentValidation
2. Persiste el lead en PostgreSQL
3. Envía 2 emails en paralelo (notificación interna + confirmación al cliente)

**Body:**
```json
{
  "nombre": "Juan Pérez",
  "empresa": "Acme Corp",
  "email": "juan@acme.com",
  "telefono": "+51 999 999 999",
  "pais": "Perú",
  "mensaje": "Quiero automatizar el seguimiento de mis leads."
}
```

**Respuestas:**
- `201 Created` — Lead guardado
- `400 Bad Request` — Errores de validación con detalle por campo
- `500 Internal Server Error` — Error de base de datos (mensaje amigable)

## Probar el flujo completo

1. Inicia PostgreSQL localmente
2. Configura credenciales en `appsettings.Development.json`
3. Ejecuta `dotnet ef database update`
4. Ejecuta `dotnet run` en este proyecto
5. Navega a `http://localhost:4200` (Angular) y envía el formulario
6. Verifica el lead en la tabla `Leads` de PostgreSQL
7. Verifica los emails en tu bandeja de entrada (o Mailpit para testing local)
