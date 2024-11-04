using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Chapter
{
    public int ChapterId { get; set; }

    public string? Title { get; set; }

    public string? Description { get; set; }

    public int? CourseId { get; set; }

    public bool? IsActive { get; set; }

    public virtual Course? Course { get; set; }

    public virtual ICollection<DetailChapter> DetailChapters { get; set; } = new List<DetailChapter>();
}
