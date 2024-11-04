using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Category
{
    public int CategoryId { get; set; }

    public string? Description { get; set; }

    public string? Image { get; set; }

    public virtual ICollection<Course> Courses { get; set; } = new List<Course>();
}
