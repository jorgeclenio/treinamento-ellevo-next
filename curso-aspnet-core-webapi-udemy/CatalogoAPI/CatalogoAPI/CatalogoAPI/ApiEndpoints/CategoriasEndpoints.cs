using CatalogoAPI.Context;
using CatalogoAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CatalogoAPI.ApiEndpoints
{
    public static class CategoriasEndpoints
    {
        public static void MapCategoriasEndpoints(this WebApplication app)
        {
            // ---------- BEGIN DEFINIÇÃO DOS ENDPOINTS PARA CATEGORIA --------------------------------------------------
            // endpoint para criar uma categoria;
            // Status Code: 201 Created;
            app.MapPost("/categorias", async (Categoria categoria, AppDbContext db) =>
            {
                db.Categorias.Add(categoria);
                await db.SaveChangesAsync();

                return Results.Created($"/categorias/{categoria.CategoriaId}", categoria);
            });

            // endpoint para obter todas as categorias;
            // Status Code: 200 Ok;
            // endpoint protegido pela autenticação jwt
            app.MapGet("/categorias", async (AppDbContext db) => await db.Categorias
                                                                 .ToListAsync())
                                                                 .WithTags("Categorias")
                                                                 .RequireAuthorization();

            // endpoint para obter uma categoria pelo Id;
            // Status Code: 200 Ok, 404 Not Found;
            app.MapGet("/categorias/{id:int}", async (int id, AppDbContext db) =>
            {
                return await db.Categorias.FindAsync(id)
                             is Categoria categoria
                             ? Results.Ok(categoria)
                             : Results.NotFound();
            });

            // endpoint para atualizar uma categoria pelo Id;
            // Status Code: 200 Ok, 404 Not Found; 400 Bad Request;
            app.MapPut("/categorias/{id:int}", async (int id, Categoria categoria, AppDbContext db) =>
            {
                if (categoria.CategoriaId != id) return Results.BadRequest();

                var categoriaDB = await db.Categorias.FindAsync(id);

                if (categoriaDB is null) return Results.NotFound();

                categoriaDB.Nome = categoria.Nome;
                categoriaDB.Descricao = categoria.Descricao;

                await db.SaveChangesAsync();
                return Results.Ok(categoriaDB);
            });

            // endpoint para deletar uma categoria pelo Id;
            // Status Code: 204 No Content;
            app.MapDelete("/categorias/{id:int}", async (int id, AppDbContext db) =>
            {
                var categoria = await db.Categorias.FindAsync(id);

                if (categoria is null) return Results.NotFound();

                db.Categorias.Remove(categoria);
                await db.SaveChangesAsync();

                return Results.NoContent();
            });
            // ---------- END DEFINIÇÃO DOS ENDPOINTS PARA CATEGORIAS ---------------------------------------------------
        }
    }
}
