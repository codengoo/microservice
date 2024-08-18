# Compile the source code to production
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
WORKDIR /app
EXPOSE 80
EXPOSE 443

COPY . ./
RUN dotnet publish -c Release -o out

# Execute the productions
FROM mcr.microsoft.com/dotnet/sdk:8.0 
WORKDIR /app
COPY --from=build-env /app/out ./
ENV ASPNETCORE_URLS=http://+:80
ENTRYPOINT [ "dotnet", "ApiGateway.dll" ]