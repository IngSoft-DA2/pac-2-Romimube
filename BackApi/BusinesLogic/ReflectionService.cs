using System.Reflection;
using IBusinessLogic;
using IImporter;
using Models;

namespace BackApi.Services;

public class ReflectionService : IReflectionService
{
   private const string ReflectionFolderName = "reflection";

    public GetImportersResponseDto GetImportersDlls()
    {
        var found = new List<string>();
        var baseDir = AppContext.BaseDirectory ?? Directory.GetCurrentDirectory();
        var reflectionPath = Path.Combine(baseDir, ReflectionFolderName);

        if (!Directory.Exists(reflectionPath))
        {
            return new GetImportersResponseDto { ImportersDlls = found.ToArray() };
        }

        foreach (var dllPath in Directory.GetFiles(reflectionPath, "*.dll"))
        {
            try
            {
                var assembly = Assembly.LoadFrom(dllPath);

                var candidateTypes = assembly.GetTypes()
                    .Where(t =>
                        t != null &&
                        t.IsClass &&
                        !t.IsAbstract &&
                        typeof(ImporterInterface).IsAssignableFrom(t));

                foreach (var type in candidateTypes)
                {
                    var instance = Activator.CreateInstance(type);
                    if (instance != null)
                    {
                        found.Add(Path.GetFileName(dllPath));
                    }
                }
            }
            catch
            {
                continue;
            }
        }

        return new GetImportersResponseDto { ImportersDlls = found.ToArray() };
    }
}