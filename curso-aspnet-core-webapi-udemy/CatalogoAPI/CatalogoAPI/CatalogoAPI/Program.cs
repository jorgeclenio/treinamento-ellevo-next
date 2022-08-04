using CatalogoAPI.Context;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// ConfigureServices
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<AppDbContext>(options => options
                .UseMySql(connectionString, ServerVersion
                .AutoDetect(connectionString)
));

var app = builder.Build();

//defini��o dos endpoints
app.MapGet("/", () => $"Cat�logo de Produtos - {DateTime.Today.Year}");



// Configure
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.Run();
