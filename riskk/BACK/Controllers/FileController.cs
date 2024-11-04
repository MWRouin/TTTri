using File.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Threading.Tasks;

namespace file.Controllers
{
    [Route("api/file")]
    [ApiController]
    public class FileController : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Post([FromForm] FileModel file)
        {
            if (file == null || file.FormFile == null || string.IsNullOrEmpty(file.FileName))
            {
                return BadRequest("Invalid file or file name");
            }

            try
            {
                string path = Path.Combine(Directory.GetCurrentDirectory(), "Resources", file.FileName);

                // Ensure the directory exists
                Directory.CreateDirectory(Path.GetDirectoryName(path));

                using (var stream = new FileStream(path, FileMode.Create))
                {
                    await file.FormFile.CopyToAsync(stream);
                }

                return StatusCode(StatusCodes.Status201Created);
            }
            catch (Exception ex)
            {
                // Log the exception (use a logging framework)
                Console.WriteLine(ex); // Replace with proper logging
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }
        [HttpGet]

        [HttpGet("{fileName}")]
        public IActionResult Get(string fileName)
        {
            try
            {
                string path = Path.Combine(Directory.GetCurrentDirectory(), "Resources", fileName);

                if (!System.IO.File.Exists(path))
                {
                    return NotFound();
                }

                var fileBytes = System.IO.File.ReadAllBytes(path);
                var fileContentType = "application/octet-stream"; // You might want to determine the content type based on the file

                return File(fileBytes, fileContentType, fileName);
            }
            catch (Exception ex)
            {
                // Log the exception (use a logging framework)
                Console.WriteLine(ex); // Replace with proper logging
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }
    }
}
