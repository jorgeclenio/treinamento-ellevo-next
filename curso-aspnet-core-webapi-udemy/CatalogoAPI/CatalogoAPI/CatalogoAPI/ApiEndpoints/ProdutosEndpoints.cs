using CatalogoAPI.Context;
using CatalogoAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CatalogoAPI.ApiEndpoints
{
    public static class ProdutosEndpoints
    {
        public static void MapProdutosEndpoints(this WebApplication app)
        {
            // ---------- BEGIN DEFINIÇÃO DOS ENDPOINTS PARA PRODUTO ----------------------------------------------------
            // endpoint para criar uma produto;
            // Status Code: 201 Created;
            app.MapPost("/produtos", async (Produto produto, AppDbContext db) =>
            {
                db.Produtos.Add(produto);
                await db.SaveChangesAsync();

                return Results.Created($"/produtos/{produto.ProdutoId}", produto);
            });

            // endpoint para obter todas as categorias;
            // Status Code: 200 Ok;
            // endpoint protegido pela autenticação jwt
            app.MapGet("/produtos", async (AppDbContext db) => await db.Produtos
                                                                .ToListAsync())
                                                                .WithTags("Produtos")
                                                                .RequireAuthorization();

            // endpoint para obter uma categoria pelo Id;
            // Status Code: 200 Ok, 404 Not Found;
            app.MapGet("/produtos/{id:int}", async (int id, AppDbContext db) =>
            {
                return await db.Produtos.FindAsync(id)
                             is Produto produto
                             ? Results.Ok(produto)
                             : Results.NotFound();
            });

            // endpoint para atualizar uma categoria pelo Id;
            // Status Code: 200 Ok, 404 Not Found; 400 Bad Request;
            app.MapPut("/produtos/{id:int}", async (int id, Produto produto, AppDbContext db) =>
            {
                if (produto.ProdutoId != id) return Results.BadRequest();

                var produtoDB = await db.Produtos.FindAsync(id);

                if (produtoDB is null) return Results.NotFound();

                produtoDB.Nome = produto.Nome;
                produtoDB.Descricao = produto.Descricao;
                produtoDB.Preco = produto.Preco;
                produtoDB.ImagemUrl = produto.ImagemUrl;
                produtoDB.DataCompra = produto.DataCompra;
                produtoDB.Estoque = produto.Estoque;
                produtoDB.CategoriaId = produto.CategoriaId;

                await db.SaveChangesAsync();
                return Results.Ok(produtoDB);
            });

            // endpoint para deletar uma categoria pelo Id;
            // Status Code: 204 No Content;
            app.MapDelete("/produtos/{id:int}", async (int id, AppDbContext db) =>
            {
                var produto = await db.Produtos.FindAsync(id);

                if (produto is null) return Results.NotFound();

                db.Produtos.Remove(produto);
                await db.SaveChangesAsync();

                return Results.NoContent();
            });
            // ---------- END DEFINIÇÃO DOS ENDPOINTS PARA PRODUTO ------------------------------------------------------
        }
    }
}
