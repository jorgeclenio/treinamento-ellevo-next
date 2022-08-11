using APICatalogo.Context;
using APICatalogo.Controllers;
using APICatalogo.DTOs;
using APICatalogo.DTOs.Mappings;
using APICatalogo.Repository;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace APICatalogoxUnitTests
{
    public class CategoriasUnitTestController
    {
        private IMapper mapper;
        private IUnitOfWork repository;

        public static DbContextOptions<AppDbContext> dbContextOptions { get; }

        public static string connectionString = "Server=localhost;DataBase=ApiCatalogoDB;Uid=root;Pwd=qwerty";

        static CategoriasUnitTestController()
        {
            /*dbContextOptions = new DbContextOptionsBuilder<AppDbContext>()
               .UseMySql(connectionString)
               .Options;*/
        }

        public CategoriasUnitTestController()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new MappingProfile());
            });
            mapper = config.CreateMapper();

            var context = new AppDbContext(dbContextOptions);

            //DBUnitTestsMockInitializer db = new DBUnitTestsMockInitializer();
            //db.Seed(context);

            repository = new UnitOfWork(context);
        }

        // testes unitários================================================
        // testar o método GET
        // ====================================Get(int id) =====================================
        /*[Fact]
        public void GetCategoriaById_Return_OkResult()
        {
            //Arrange  
            var controller = new CategoriasController(repository, mapper);
            var catId = 2;

            //Act  
            var data = controller.Get(catId);
            Console.WriteLine(data);

            //Assert  
            List<CategoriaDTO> categoriaDTOs = Assert.IsType<List<CategoriaDTO>>(data.Value);
        }*/
    }
}