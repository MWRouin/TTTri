using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Level
{
    public int LevelId { get; set; }

    public string? Description { get; set; }

    public bool? IsActive { get; set; }

    public virtual ICollection<Course> Courses { get; set; } = new List<Course>();
}
