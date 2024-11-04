namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategorieController : ControllerBase
    {
        ICategorierepository Categorierepository;
        public CategorieController(ICategorierepository _Categorierepository)
        {
            Categorierepository = _Categorierepository;
        }

        // GET api/Categorie
        [HttpGet]
        public async Task<IActionResult> GetAllCategorie()
        {
            try
            {
                List<Categorie>? Categorie = await Categorierepository.GetAllCategorie();
                return Ok(Categorie);
            }
            catch
            {
                return Problem();
            }
        }
        // GET api/Categorie/test/2
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCategorieByID(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                Categorie? Categorie = await Categorierepository.GetCategorieById(id);
                return Ok(Categorie);
            }
            catch
            {
                return Problem();
            }

        }

        // POST api/Categorie
        [HttpPost]
        public async Task<IActionResult> AddCategorie(Categorie Categorie)
        {
            try
            {
                if (Categorie == null)
                {
                    return BadRequest();
                }
                bool res = await Categorierepository.AddCategorie(Categorie);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
        }

        // PUT api/Categorie
        [HttpPut]
        public async Task<IActionResult> EditCategorie(Categorie Categorie)
        {
            try
            {
                if (Categorie == null)
                {
                    return BadRequest();
                }
                bool res = await Categorierepository.UpdateCategorie(Categorie);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
        }

        // DELETE api/Categorie/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategorie(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                bool role = await Categorierepository.DeleteCategorie(id);
                return Ok(role);
            }
            catch
            {
                return Problem();
            }
        }
    }

}