global using System;
global using System.Text;
global using System.Collections.Generic;
global using Microsoft.EntityFrameworkCore;
global using Microsoft.AspNetCore.Mvc;
global using Microsoft.Data.SqlClient;
global using Microsoft.EntityFrameworkCore.Storage;

global using backend.Models;
global using backend.Utils;
global using backend.Dto;
global using backend.Repositorys;
global using Microsoft.Extensions.FileProviders;
global using Microsoft.AspNetCore.Http.Features;
global using Microsoft.AspNetCore.HttpOverrides;
global using System.Text.Json.Serialization;

global using System.IdentityModel.Tokens.Jwt;
global using System.Security.Claims;
global using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

// Configuration du port
builder.WebHost.UseUrls("http://localhost:5000");

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
// Ajout du service de contexte de base de données avec une injection de dépendances de portée pool
builder.Services.AddDbContext<TriTrainContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("ConnectionString"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("ConnectionString"))
    ));

builder.Services.AddControllersWithViews()
    .AddJsonOptions(options => options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

// Enregistrement des services de repository
builder.Services.AddScoped<IRolesrepository, Rolesrepository>();
builder.Services.AddScoped<IUsersRepository, UserRepository>();
builder.Services.AddScoped<ICourseRepository, CourseRepositroy>();
builder.Services.AddScoped<ILevelsRepository, LevelRepository>();
builder.Services.AddScoped<ITestesRepository, TestRepository>();
builder.Services.AddScoped<IParticipationRepository,ParticipationRepositroy>();
builder.Services.AddScoped<ISectionsRepository, SectionRepository>();
builder.Services.AddScoped<IQuestionsRepository, QuestionsRepository>();
builder.Services.AddScoped<IAnswersRepository, AnswersRepository>();
builder.Services.AddScoped<IReclaimRepository, ReclaimRepositroy>();
builder.Services.AddScoped<ISessionRepository, SessionRepository>();
builder.Services.AddScoped<ICertificateRepository, CertificateRepository>();
builder.Services.AddScoped<ICertificateRepository, CertificateRepository>();
builder.Services.AddScoped<IPaymentRepository, PaymentRepository>();
builder.Services.AddScoped<IResponseRepository, ResponseRepository>();
builder.Services.AddScoped<IResponseDetailRepository, ResponseDetailRepository>();
builder.Services.AddScoped<IFeedbackRepository, FeedbackRepository>();
builder.Services.AddScoped<IFavoriteRepository, FavoriteRepository>();
builder.Services.AddScoped<IPaymentMethodeRepository, PaymentMethodeRepository>();
builder.Services.AddScoped<IInvoiceRepository, InvoiceRepository>();
builder.Services.AddScoped<IEmailConfirmationRepository, EmailConfirmationRepository>();
builder.Services.AddScoped<ICategorierepository, Categorierepository>();

// Enregistrement des services MVC (Controllers)
builder.Services.AddControllers();

// Ajout de la prise en charge de Swagger
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          //   policy.WithOrigins("http://localhost:3000")
                          policy.AllowAnyOrigin()
                                      .AllowAnyHeader()
                                      .AllowAnyMethod();
                      });
});

builder.Services.Configure<FormOptions>(o =>
{
    o.ValueLengthLimit = int.MaxValue;
    o.MultipartBodyLengthLimit = int.MaxValue;
    o.MemoryBufferThreshold = int.MaxValue;
});

var app = builder.Build();

// Configuration du pipeline de requête HTTP
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseDefaultFiles();
app.UseStaticFiles();

app.UseStaticFiles(new StaticFileOptions()
{
    FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Resources")),
    RequestPath = new PathString("/Resources")
});

app.UseForwardedHeaders(new ForwardedHeadersOptions
{
    ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
});
app.UseCors(MyAllowSpecificOrigins);
app.UseHttpsRedirection();

app.UseStaticFiles(new StaticFileOptions()
{
    FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Resources")),
    RequestPath = new PathString("/Resources")
});

// Mappage des contrôleurs
app.UseAuthorization();
app.MapControllers();
app.Run();
