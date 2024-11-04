using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Inscription
{
    public int InscriptionId { get; set; }

    public string? Name { get; set; }

    public int? Prix { get; set; }

    public int? CourseId { get; set; }

    public int? UserId { get; set; }

    public bool? IsActive { get; set; }

    public virtual Course? Course { get; set; }

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();

    public virtual User? User { get; set; }
}
