using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Question
{
    public int QuestionId { get; set; }

    public string? Labelle { get; set; }

    public string? Description { get; set; }

    public int? TestId { get; set; }

    public bool? IsActive { get; set; }

    public virtual ICollection<Answer> Answers { get; set; } = new List<Answer>();

    public virtual ICollection<Response> Responses { get; set; } = new List<Response>();

    public virtual Test? Test { get; set; }
}
