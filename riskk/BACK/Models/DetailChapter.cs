using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class DetailChapter
{
    public int Detailchapter1 { get; set; }

    public string? Type { get; set; }

    public string? Path { get; set; }

    public int? ChapterId { get; set; }

    public bool? IsActive { get; set; }

    public virtual Chapter? Chapter { get; set; }
}
