using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Certificate
{
    public int CertificateId { get; set; }

    public string? CertificateName { get; set; }

    public int? UserId { get; set; }

    public int? CourseId { get; set; }

    public bool? IsActive { get; set; }

    public virtual Course? Course { get; set; }

    public virtual User? User { get; set; }
}
