using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace backend.Models;

public partial class TriTrainContext : DbContext
{
  

    public TriTrainContext(DbContextOptions<TriTrainContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Answer> Answers { get; set; }

    public virtual DbSet<Categorie> Categories { get; set; }

    public virtual DbSet<Certificate> Certificates { get; set; }

    public virtual DbSet<Course> Courses { get; set; }

    public virtual DbSet<EmailConfirmation> EmailConfirmations { get; set; }

    public virtual DbSet<ExceptionDb> ExceptionDbs { get; set; }

    public virtual DbSet<Feedback> Feedbacks { get; set; }

    public virtual DbSet<Invoice> Invoices { get; set; }

    public virtual DbSet<Level> Levels { get; set; }

    public virtual DbSet<Participation> Participations { get; set; }

    public virtual DbSet<Payment> Payments { get; set; }

    public virtual DbSet<PaymentMethode> PaymentMethodes { get; set; }

    public virtual DbSet<Question> Questions { get; set; }

    public virtual DbSet<Reclaim> Reclaims { get; set; }

    public virtual DbSet<Response> Responses { get; set; }

    public virtual DbSet<ResponseDetail> ResponseDetails { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<Section> Sections { get; set; }

    public virtual DbSet<Session> Sessions { get; set; }

    public virtual DbSet<Test> Tests { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public DbSet<Favorite> Favorites { get; set; } 

 
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.UseCollation("French_CI_AS");

        modelBuilder.Entity<Answer>(entity =>
        {
            entity.Property(e => e.AnswerId).HasColumnName("AnswerID");
            entity.Property(e => e.AnswerText).IsUnicode(false);
            entity.Property(e => e.IsActive).HasColumnName("isActive");
            entity.Property(e => e.QuestionId).HasColumnName("QuestionID");

            entity.HasOne(d => d.Question).WithMany(p => p.Answers)
                .HasForeignKey(d => d.QuestionId)
                .HasConstraintName("FK_Answers_Question");
        });

        modelBuilder.Entity<Categorie>(entity =>
        {
            entity.ToTable("categorie");

            entity.Property(e => e.CategorieId).HasColumnName("CategorieID");
            entity.Property(e => e.Description).IsUnicode(false);
            entity.Property(e => e.Image).IsUnicode(false);
            entity.Property(e => e.IsActive).HasColumnName("isActive");
        });

        modelBuilder.Entity<Certificate>(entity =>
        {
            entity.ToTable("Certificate");

            entity.Property(e => e.CertificateId).HasColumnName("CertificateID");
            entity.Property(e => e.CertificateName).IsUnicode(false);
            entity.Property(e => e.CourseId).HasColumnName("CourseID");
            entity.Property(e => e.IsActive).HasColumnName("isActive");
            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(d => d.Course).WithMany(p => p.Certificates)
                .HasForeignKey(d => d.CourseId)
                .HasConstraintName("FK_Certificate_Course");

            entity.HasOne(d => d.User).WithMany(p => p.Certificates)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_Certificate_User");
        });

        modelBuilder.Entity<Course>(entity =>
        {
            entity.ToTable("Course");

            entity.Property(e => e.CourseId).HasColumnName("CourseID");
            entity.Property(e => e.CategorieId).HasColumnName("CategorieID");
            entity.Property(e => e.Date).HasColumnType("date");
            entity.Property(e => e.Description).IsUnicode(false);
            entity.Property(e => e.Image)
                .IsUnicode(false)
                .HasColumnName("image");
            entity.Property(e => e.IsActive).HasColumnName("isActive");
            entity.Property(e => e.IsFavorite).HasColumnName("isFavorite");
            entity.Property(e => e.LevelId).HasColumnName("LevelID");
            entity.Property(e => e.ReclaimId).HasColumnName("ReclaimID");
            entity.Property(e => e.Title).IsUnicode(false);

            entity.HasOne(d => d.Categorie).WithMany(p => p.Courses)
                .HasForeignKey(d => d.CategorieId)
                .HasConstraintName("FK_Course_Categorie");

            entity.HasOne(d => d.Level).WithMany(p => p.Courses)
                .HasForeignKey(d => d.LevelId)
                .HasConstraintName("FK_Course_level");

            entity.HasOne(d => d.Reclaim).WithMany(p => p.Courses)
                .HasForeignKey(d => d.ReclaimId)
                .HasConstraintName("FK_Course_Claim");
        });

        modelBuilder.Entity<EmailConfirmation>(entity =>
        {
            entity.HasKey(e => e.ConfirmationId);

            entity.ToTable("EmailConfirmation");

            entity.Property(e => e.ConfirmationId).HasColumnName("ConfirmationID");
            entity.Property(e => e.ConfirmationToken).IsUnicode(false);
            entity.Property(e => e.PaymentId).HasColumnName("PaymentID");
            entity.Property(e => e.SentDate).HasColumnType("date");
            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(d => d.Payment).WithMany(p => p.EmailConfirmations)
                .HasForeignKey(d => d.PaymentId)
                .HasConstraintName("FK_EmailConfirmation_Payment");

            entity.HasOne(d => d.User).WithMany(p => p.EmailConfirmations)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_EmailConfirmation_User");
        });

        modelBuilder.Entity<ExceptionDb>(entity =>
        {
            entity.ToTable("ExceptionDB");

            entity.Property(e => e.CreateDate).HasColumnType("datetime");
            entity.Property(e => e.Data).IsUnicode(false);
            entity.Property(e => e.FunctionName).IsUnicode(false);
            entity.Property(e => e.Hresult)
                .IsUnicode(false)
                .HasColumnName("HResult");
            entity.Property(e => e.InPlaintext).IsUnicode(false);
            entity.Property(e => e.Message).IsUnicode(false);
            entity.Property(e => e.Repository).IsUnicode(false);
            entity.Property(e => e.Stacktrace).IsUnicode(false);
        });

        modelBuilder.Entity<Feedback>(entity =>
        {
            entity.ToTable("Feedback");

            entity.Property(e => e.FeedBackId).HasColumnName("FeedBackID");
            entity.Property(e => e.CourseId).HasColumnName("CourseID");
            entity.Property(e => e.FeedBackText).IsUnicode(false);
            entity.Property(e => e.IsActive).HasColumnName("isActive");
            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(d => d.Course).WithMany(p => p.Feedbacks)
                .HasForeignKey(d => d.CourseId)
                .HasConstraintName("FK_Feedback_Course");

            entity.HasOne(d => d.User).WithMany(p => p.Feedbacks)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_Feedback_User");
        });
        modelBuilder.Entity<Favorite>(entity =>
        {
            
            entity.ToTable("Favorite");

            
            entity.Property(e => e.FavoriteId).HasColumnName("FavoriteID");
            entity.Property(e => e.UserId).HasColumnName("UserID");
            entity.Property(e => e.CourseId).HasColumnName("CourseID");

   
            entity.HasOne(d => d.User)
                .WithMany(p => p.Favorites)  
                .HasForeignKey(d => d.UserId) 
                .HasConstraintName("FK_Favorite_User");

           
            entity.HasOne(d => d.Course)
                .WithMany(p => p.Favorites)   
                .HasForeignKey(d => d.CourseId)
                .HasConstraintName("FK_Favorite_Course");
        });

        modelBuilder.Entity<Invoice>(entity =>
        {
            entity.ToTable("Invoice");

            entity.Property(e => e.InvoiceId).HasColumnName("InvoiceID");
            entity.Property(e => e.InvoiceDate).HasColumnType("date");
            entity.Property(e => e.PaymentStatus).IsUnicode(false);
            entity.Property(e => e.TotaleAmount).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(d => d.User).WithMany(p => p.Invoices)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_Invoice_User");
        });

        modelBuilder.Entity<Level>(entity =>
        {
            entity.ToTable("Level");

            entity.Property(e => e.LevelId).HasColumnName("LevelID");
            entity.Property(e => e.Description).IsUnicode(false);
            entity.Property(e => e.IsActive).HasColumnName("isActive");
        });

        modelBuilder.Entity<Participation>(entity =>
        {
            entity.ToTable("Participation");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CourseId).HasColumnName("CourseID");
            entity.Property(e => e.Date).HasColumnType("date");
            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(d => d.Course).WithMany(p => p.Participations)
                .HasForeignKey(d => d.CourseId)
                .HasConstraintName("FK_Participation_Course");

            entity.HasOne(d => d.User).WithMany(p => p.Participations)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("FK_Participation_User");
        });

        modelBuilder.Entity<Payment>(entity =>
        {
            entity.ToTable("Payment");

            entity.Property(e => e.PaymentId).HasColumnName("PaymentID");
            entity.Property(e => e.Amount).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.InvoiceId).HasColumnName("InvoiceID");
            entity.Property(e => e.PaymentDate).HasColumnType("date");
            entity.Property(e => e.PaymentMethodeId).HasColumnName("PaymentMethodeID");

            entity.HasOne(d => d.Invoice).WithMany(p => p.Payments)
                .HasForeignKey(d => d.InvoiceId)
                .HasConstraintName("FK_Payment_Invoice");

            entity.HasOne(d => d.PaymentMethode).WithMany(p => p.Payments)
                .HasForeignKey(d => d.PaymentMethodeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Payment_PaymentMethode");
        });

        modelBuilder.Entity<PaymentMethode>(entity =>
        {
            entity.ToTable("PaymentMethode");

            entity.Property(e => e.PaymentMethodeId).HasColumnName("PaymentMethodeID");
            entity.Property(e => e.PaymentMehodeName).IsUnicode(false);
        });

        modelBuilder.Entity<Question>(entity =>
        {
            entity.HasKey(e => e.QuestionId).HasName("PK_Test-Details");

            entity.ToTable("Question");

            entity.Property(e => e.QuestionId).HasColumnName("QuestionID");
            entity.Property(e => e.Description).IsUnicode(false);
            entity.Property(e => e.IsActive).HasColumnName("isActive");
            entity.Property(e => e.Labelle).IsUnicode(false);
            entity.Property(e => e.TestId).HasColumnName("TestID");

            entity.HasOne(d => d.Test).WithMany(p => p.Questions)
                .HasForeignKey(d => d.TestId)
                .HasConstraintName("FK_Question_Test");
        });

        modelBuilder.Entity<Reclaim>(entity =>
        {
            entity.HasKey(e => e.ReclaimId).HasName("PK_Claim");

            entity.ToTable("Reclaim");

            entity.Property(e => e.ReclaimId).HasColumnName("ReclaimID");
            entity.Property(e => e.Description).IsUnicode(false);
            entity.Property(e => e.IsActive).HasColumnName("isActive");
            entity.Property(e => e.Tag).IsUnicode(false);
            entity.Property(e => e.Title).IsUnicode(false);
        });

        modelBuilder.Entity<Response>(entity =>
        {
            entity.ToTable("Response");

            entity.Property(e => e.ResponseId).HasColumnName("ResponseID");
            entity.Property(e => e.QuestionId).HasColumnName("QuestionID");
            entity.Property(e => e.UserId).HasColumnName("UserID");
            entity.Property(e => e.Value).IsUnicode(false);

            entity.HasOne(d => d.Question).WithMany(p => p.Responses)
                .HasForeignKey(d => d.QuestionId)
                .HasConstraintName("FK_Response_Question");

            entity.HasOne(d => d.User).WithMany(p => p.Responses)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_Response_User");
        });

        modelBuilder.Entity<ResponseDetail>(entity =>
        {
            entity.HasKey(e => e.ResponseDetailsId);

            entity.ToTable("Response_Details");

            entity.Property(e => e.ResponseDetailsId).HasColumnName("ResponseDetailsID");
            entity.Property(e => e.AnswerId).HasColumnName("AnswerID");
            entity.Property(e => e.Description).IsUnicode(false);
            entity.Property(e => e.ResponseId).HasColumnName("ResponseID");

            entity.HasOne(d => d.Answer).WithMany(p => p.ResponseDetails)
                .HasForeignKey(d => d.AnswerId)
                .HasConstraintName("FK_Response_Details_Answers");

            entity.HasOne(d => d.Response).WithMany(p => p.ResponseDetails)
                .HasForeignKey(d => d.ResponseId)
                .HasConstraintName("FK_Response_Details_Response");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.ToTable("Role");

            entity.Property(e => e.RoleId).HasColumnName("RoleID");
            entity.Property(e => e.Description).IsUnicode(false);
        });

        modelBuilder.Entity<Section>(entity =>
        {
            entity.HasKey(e => e.SectionId).HasName("PK_Question");

            entity.ToTable("Section");

            entity.Property(e => e.SectionId).HasColumnName("SectionID");
            entity.Property(e => e.CourseId).HasColumnName("CourseID");
            entity.Property(e => e.Description).IsUnicode(false);
            entity.Property(e => e.IsActive).HasColumnName("isActive");
            entity.Property(e => e.Title).IsUnicode(false);

            entity.HasOne(d => d.Course).WithMany(p => p.Sections)
                .HasForeignKey(d => d.CourseId)
                .HasConstraintName("FK_Question_Course");
        });

        modelBuilder.Entity<Session>(entity =>
        {
            entity.HasKey(e => e.SessionId).HasName("PK_DetailChapter");

            entity.ToTable("Session");

            entity.Property(e => e.SessionId).HasColumnName("SessionID");
            entity.Property(e => e.IsActive).HasColumnName("isActive");
            entity.Property(e => e.SectionId).HasColumnName("SectionID");
            entity.Property(e => e.Title).IsUnicode(false);
            entity.Property(e => e.Type).IsUnicode(false);
            entity.Property(e => e.Url).IsUnicode(false);

            entity.HasOne(d => d.Section).WithMany(p => p.Sessions)
                .HasForeignKey(d => d.SectionId)
                .HasConstraintName("FK_Session_Section");
        });

        modelBuilder.Entity<Test>(entity =>
        {
            entity.ToTable("Test");

            entity.Property(e => e.TestId).HasColumnName("TestID");
            entity.Property(e => e.CourseId).HasColumnName("CourseID");
            entity.Property(e => e.Description).IsUnicode(false);
            entity.Property(e => e.IsActive).HasColumnName("isActive");
            entity.Property(e => e.Title).IsUnicode(false);

            entity.HasOne(d => d.Course).WithMany(p => p.Tests)
                .HasForeignKey(d => d.CourseId)
                .HasConstraintName("FK_Test_course");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.ToTable("User");

            entity.Property(e => e.UserId).HasColumnName("UserID");
            entity.Property(e => e.Addresse).IsUnicode(false);
            entity.Property(e => e.Email).IsUnicode(false);
            entity.Property(e => e.Etat).IsUnicode(false);
            entity.Property(e => e.Firstname).IsUnicode(false);
            entity.Property(e => e.Gender).IsUnicode(false);
            entity.Property(e => e.ImageUrl)
                .IsUnicode(false)
                .HasColumnName("imageUrl");
            entity.Property(e => e.IsActive).HasColumnName("isActive");
            entity.Property(e => e.Lastname).IsUnicode(false);
            entity.Property(e => e.Password)
                .HasMaxLength(10)
                .IsFixedLength();
            entity.Property(e => e.ReclaimId).HasColumnName("ReclaimID");
            entity.Property(e => e.RefreshToken).IsUnicode(false);
            entity.Property(e => e.RoleId).HasColumnName("RoleID");
            entity.Property(e => e.Telephone).IsUnicode(false);
            entity.Property(e => e.Token).IsUnicode(false);
            entity.Property(e => e.TokenRdateCreation).HasColumnType("datetime");
            entity.Property(e => e.TokenRdateExpiration).HasColumnType("datetime");

            entity.HasOne(d => d.Reclaim).WithMany(p => p.Users)
                .HasForeignKey(d => d.ReclaimId)
                .HasConstraintName("FK_User_Claim");

            entity.HasOne(d => d.Role).WithMany(p => p.Users)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("FK_User_Role");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
