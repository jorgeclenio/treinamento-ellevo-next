using CatalogoAPI.Context;
using CatalogoAPI.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// ---------- Configure Services ----------------------------------------------------------------------------
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<AppDbContext>(options => options
                .UseMySql(connectionString, ServerVersion
                .AutoDetect(connectionString)
));

var app = builder.Build();

// ---------- BEGIN DEFINIÇÃO DOS ENDPOINTS PARA CATEGORIA --------------------------------------------------
app.MapGet("/", () => $"Catálogo de Produtos - {DateTime.Today.Year}").ExcludeFromDescription();

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
app.MapGet("/categorias", async (AppDbContext db) => await db.Categorias.ToListAsync());

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
// ---------- END DEFINIÇÃO DOS ENDPOINTS PARA PRODUTO ------------------------------------------------------

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
app.MapGet("/produtos", async (AppDbContext db) => await db.Produtos.ToListAsync());

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

// ---------- Configure -------------------------------------------------------------------------------------
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.Run();
