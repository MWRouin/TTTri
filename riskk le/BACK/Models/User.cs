using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class User
{
    public int UserId { get; set; }

    public string? Firstname { get; set; }

    public string? Email { get; set; }

    public string? Telephone { get; set; }

    public string? Addresse { get; set; }

    public int? RoleId { get; set; }

    public string? Lastname { get; set; }

    public string? Password { get; set; }

    public string? RefreshToken { get; set; }

    public DateTime? TokenRdateCreation { get; set; }

    public DateTime? TokenRdateExpiration { get; set; }

    public string? Token { get; set; }

    public string? Etat { get; set; }

    public bool? IsActive { get; set; }

    public int? ReclaimId { get; set; }

    public string? ImageUrl { get; set; }

    public int? Age { get; set; }

    public string? Gender { get; set; }

    public virtual ICollection<Certificate> Certificates { get; set; } = new List<Certificate>();

    public virtual ICollection<EmailConfirmation> EmailConfirmations { get; set; } = new List<EmailConfirmation>();

    public virtual ICollection<Feedback> Feedbacks { get; set; } = new List<Feedback>();

    public virtual ICollection<Invoice> Invoices { get; set; } = new List<Invoice>();

    public virtual ICollection<Participation> Participations { get; set; } = new List<Participation>();

    public virtual Reclaim? Reclaim { get; set; }

    public virtual ICollection<Response> Responses { get; set; } = new List<Response>();

    public virtual Role? Role { get; set; }
    public virtual ICollection<Favorite> Favorites { get; set; } = new List<Favorite>();
}
