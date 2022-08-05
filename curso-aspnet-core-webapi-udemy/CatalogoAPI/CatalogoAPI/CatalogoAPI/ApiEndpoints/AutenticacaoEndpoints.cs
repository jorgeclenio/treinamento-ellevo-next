using CatalogoAPI.Models;
using CatalogoAPI.Services;
using Microsoft.AspNetCore.Authorization;

namespace CatalogoAPI.ApiEndpoints
{
    public static class AutenticacaoEndpoints
    {
        public static void MapAutenticacaoEndpoints(this WebApplication app)
        {
            // ---------- BEGIN ENDPOINT PARA LOGIN ---------------------------------------------------------------------
            app.MapPost("/login", [AllowAnonymous] (UserModel userModel, ITokenService tokenService) =>
            {
                if (userModel == null)
                {
                    return Results.BadRequest("Login inválido.");
                }
                if (userModel.UserName == "admin" && userModel.Password == "12345678")
                {
                    var tokenString = tokenService.GerarToken(app.Configuration["Jwt:Key"],
                        app.Configuration["Jwt:Issuer"],
                        app.Configuration["Jwt:Audience"],
                        userModel);
                    return Results.Ok(new { token = tokenString });
                }
                else
                {
                    return Results.BadRequest("Login inválido.");
                }
            }).Produces(StatusCodes.Status400BadRequest)
                            .Produces(StatusCodes.Status200OK)
                            .WithName("Login")
                            .WithTags("Autenticacao");
            // ---------- END ENDPOINT PARA LOGIN -----------------------------------------------------------------------
        }
    }
}
