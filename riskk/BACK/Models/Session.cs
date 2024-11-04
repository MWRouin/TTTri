using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Session
{
    public int SessionId { get; set; }

    public string? Type { get; set; }

    public string? Url { get; set; }

    public int? SectionId { get; set; }

    public bool? IsActive { get; set; }

    public string? Title { get; set; }

    public int? Duration { get; set; }

    public virtual Section? Section { get; set; }
}
