using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class ResponseDetail
{
    public int ResponseDetailsId { get; set; }

    public string Description { get; set; } = null!;

    public int? ResponseId { get; set; }

    public int? AnswerId { get; set; }

    public virtual Answer? Answer { get; set; }

    public virtual Response? Response { get; set; }
}
