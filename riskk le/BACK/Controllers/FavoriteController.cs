namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoriteController : ControllerBase
    {
        IFavoriteRepository Favoriterepository;
        public FavoriteController (IFavoriteRepository _Favoriterepository){
                Favoriterepository = _Favoriterepository;
        }
                // GET api/Favorite
        [HttpGet]
        public async Task<IActionResult> GetFavorite()
        {
        

            try
            {
                List<Favorite>? allFavorite = await Favoriterepository.GetAllFavorite();
                return Ok(allFavorite);
            }
            catch
            {
                return Problem();
            }

        }

        // POST api/Favorite
        [HttpPost]
        public async Task<IActionResult> AddFavorite(Favorite Favorite)
        {   
            if (Favorite == null)
                {
                    return BadRequest("Favorite data is required.");
                }

            try
            {
                
                Favorite? res = await Favoriterepository.AddFavorite(Favorite);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
        }

  

        // DELETE api/Favorite/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFavorite(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                bool role = await Favoriterepository.DeleteFavorite(id);
                return Ok(role);
            }
            catch
            {
                return Problem();
            }
        }
                
    }
    
}