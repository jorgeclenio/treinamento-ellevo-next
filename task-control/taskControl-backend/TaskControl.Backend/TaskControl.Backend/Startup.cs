using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using TaskControl.Backend.Models;
using TaskControl.Backend.Services;
using AutoMapper;
using System;

namespace TaskControl.Backend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // transi��o da interface para a classe;
            services.AddTransient<ITaskAppService, TaskAppService>();

            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            // database;
            services.Configure<TaskControlDbDatabaseSettings>(
                Configuration.GetSection(nameof(TaskControlDbDatabaseSettings)));

            services.AddSingleton<ITaskControlDbDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<TaskControlDbDatabaseSettings>>().Value);

            // controllers;
            services.AddControllers();

            // swagger;
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "TaskControl.Backend", Version = "v1" });
            });

            // cors calling frontend;
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(policy =>
               {
                   policy.WithOrigins("http://localhost:4200");
               });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // swagger;
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "TaskControl.Backend v1");
            });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            // cors;
            app.UseCors();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
