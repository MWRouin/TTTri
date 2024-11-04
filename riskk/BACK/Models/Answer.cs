using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Answer
{
    public int AnswerId { get; set; }

    public string? AnswerText { get; set; }

    public bool? IsCorrect { get; set; }

    public int? QuestionId { get; set; }

    public bool? IsActive { get; set; }

    public virtual Question? Question { get; set; }

    public virtual ICollection<ResponseDetail> ResponseDetails { get; set; } = new List<ResponseDetail>();
}
