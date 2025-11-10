using IBusinessLogic;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace BackApi.Controllers
{
    [ApiController]
    [Route("api/reflection")]
    public class ReflectionController(IReflectionService reflectionService) : ControllerBase
    {
        private readonly IReflectionService _reflectionService = reflectionService;

        [HttpGet("importers")]
        public ActionResult<GetImportersResponseDto> GetImporters()
        {
            var dlls = _reflectionService.GetImportersDlls();
            return Ok(dlls);
        }
    }
}
