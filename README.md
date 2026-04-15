# Sapienxa Landing Page

Monorepo de la landing page de **Sapienxa**, compuesto por frontend en Angular y backend en ASP.NET Core para captura y notificación de leads.

## Estructura

- `Sapienxa.Web/`: aplicación Angular (landing page)
- `Sapienxa.API/`: API REST en .NET 8 para registrar leads y enviar correos

## Requisitos

- Node.js 20+ y npm
- .NET SDK 8
- PostgreSQL (para la API)
- Cuenta SendGrid (para envío de correos)

## Configuración rápida

### 1. Backend (`Sapienxa.API`)

1. Edita `Sapienxa.API/appsettings.Development.json` y configura:
   - `ConnectionStrings:DefaultConnection`
   - `SendGrid:ApiKey`
   - `SendGrid:FromEmail`
   - `SendGrid:FromName`
   - `SendGrid:NotificationEmail`
2. Aplica migraciones:

```bash
dotnet ef database update
```

3. Ejecuta la API:

```bash
dotnet run
```

La API expone Swagger en `http://localhost:5173/swagger`.

### 2. Frontend (`Sapienxa.Web`)

Instala dependencias y levanta el servidor de desarrollo:

```bash
npm ci
npm start
```

La web estará en `http://localhost:4200`.

## Comandos útiles

### API

```bash
dotnet build
dotnet test
```

### Web

```bash
npm run build
npm run test -- --watch=false
```

## Seguridad

- No subas secretos reales a Git.
- Usa placeholders en archivos de configuración locales.
- Si una clave se expone, revócala y regenera una nueva inmediatamente.
