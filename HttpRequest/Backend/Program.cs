var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Employee Management",
        Description = "Developed By CodeWithKarthik",
        Version = "v1.0",
        Contact = new OpenApiContact
        {
            Name = "Email",
            Email = "codewithkarthik97@outlook.com",
        },
        TermsOfService = new Uri("https://www.youtube.com/@codewithkarthik/videos")
    });
});


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
