
namespace backend.Models;
public partial class Favorite

{
    public int FavoriteId { get; set; }
    
    public int UserId { get; set; }

    public virtual User? User { get; set; }
    
    public int CourseId { get; set; }

     public virtual Course? Course { get; set; }
}
