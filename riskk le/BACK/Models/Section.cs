using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Section
{
    public int SectionId { get; set; }

    public string? Title { get; set; }

    public string? Description { get; set; }

    public int? CourseId { get; set; }

    public bool? IsActive { get; set; }

    public int? Duration { get; set; }

    public virtual Course? Course { get; set; }

    public virtual ICollection<Session> Sessions { get; set; } = new List<Session>();
}
