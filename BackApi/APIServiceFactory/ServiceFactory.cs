using BackApi.Services;
using Microsoft.Extensions.DependencyInjection;
using IBusinessLogic;

namespace APIServiceFactory
{
    public static class ServiceFactory
    {
        public static void AddServices(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddScoped<IReflectionService, ReflectionService>();
        }
    }
}
