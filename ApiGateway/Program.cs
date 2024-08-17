var builder = WebApplication.CreateBuilder(args);

// Swagger client
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// API Gateway
builder.Services.AddReverseProxy()
    .LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));

var app = builder.Build();

// Swagger Middleware
app.UseSwagger();
app.UseSwaggerUI();

// Reverse Proxy Middleware
app.MapReverseProxy();

app.UseHttpsRedirection();
app.MapGet("/", () =>
{
    return;
})
.WithName("GetWeatherForecast")
.WithOpenApi();

app.Run();