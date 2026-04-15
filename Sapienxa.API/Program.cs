using FluentValidation;
using Microsoft.EntityFrameworkCore;
using Sapienxa.API.Data;
using Sapienxa.API.Services;
using SendGrid;

var builder = WebApplication.CreateBuilder(args);

// CORS
var allowedOrigins = builder.Configuration
    .GetSection("Cors:AllowedOrigins")
    .Get<string[]>() ?? [];

builder.Services.AddCors(options =>
    options.AddDefaultPolicy(policy =>
        policy.WithOrigins(allowedOrigins)
              .AllowAnyHeader()
              .AllowAnyMethod()));

// Database
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// SendGrid
builder.Services.AddSingleton<ISendGridClient>(
    new SendGridClient(builder.Configuration["SendGrid:ApiKey"]!));

// Application services
builder.Services.AddScoped<IEmailService, EmailService>();

// Validation
builder.Services.AddValidatorsFromAssemblyContaining<Program>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();

if (!app.Environment.IsDevelopment())
    app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
