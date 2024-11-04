using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Feedback
{
    public int FeedBackId { get; set; }

    public string? FeedBackText { get; set; }

    public int? Rating { get; set; }

    public int? UserId { get; set; }

    public int? CourseId { get; set; }

    public bool? IsActive { get; set; }

    public virtual Course? Course { get; set; }

    public virtual User? User { get; set; }
}
