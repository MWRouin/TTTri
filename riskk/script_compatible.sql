/****** Object:  Database [TriTrain]    Script Date: 04/11/2024 22:25:52 ******/
CREATE DATABASE IF NOT EXISTS TriTrain;
USE TriTrain;

 ON  PRIMARY 
( NAME = N'TriTrain', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\TriTrain.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'TriTrain_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\TriTrain_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
ALTER DATABASE [TriTrain] SET COMPATIBILITY_LEVEL = 150
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [TriTrain].[dbo].[sp_fulltext_database] @action = 'enable'
end
ALTER DATABASE [TriTrain] SET ANSI_NULL_DEFAULT OFF 
ALTER DATABASE [TriTrain] SET ANSI_NULLS OFF 
ALTER DATABASE [TriTrain] SET ANSI_PADDING OFF 
ALTER DATABASE [TriTrain] SET ANSI_WARNINGS OFF 
ALTER DATABASE [TriTrain] SET ARITHABORT OFF 
ALTER DATABASE [TriTrain] SET AUTO_CLOSE OFF 
ALTER DATABASE [TriTrain] SET AUTO_SHRINK OFF 
ALTER DATABASE [TriTrain] SET AUTO_UPDATE_STATISTICS ON 
ALTER DATABASE [TriTrain] SET CURSOR_CLOSE_ON_COMMIT OFF 
ALTER DATABASE [TriTrain] SET CURSOR_DEFAULT  GLOBAL 
ALTER DATABASE [TriTrain] SET CONCAT_NULL_YIELDS_NULL OFF 
ALTER DATABASE [TriTrain] SET NUMERIC_ROUNDABORT OFF 
ALTER DATABASE [TriTrain] SET QUOTED_IDENTIFIER OFF 
ALTER DATABASE [TriTrain] SET RECURSIVE_TRIGGERS OFF 
ALTER DATABASE [TriTrain] SET  DISABLE_BROKER 
ALTER DATABASE [TriTrain] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
ALTER DATABASE [TriTrain] SET DATE_CORRELATION_OPTIMIZATION OFF 
ALTER DATABASE [TriTrain] SET TRUSTWORTHY OFF 
ALTER DATABASE [TriTrain] SET ALLOW_SNAPSHOT_ISOLATION OFF 
ALTER DATABASE [TriTrain] SET PARAMETERIZATION SIMPLE 
ALTER DATABASE [TriTrain] SET READ_COMMITTED_SNAPSHOT OFF 
ALTER DATABASE [TriTrain] SET HONOR_BROKER_PRIORITY OFF 
ALTER DATABASE [TriTrain] SET RECOVERY FULL 
ALTER DATABASE [TriTrain] SET  MULTI_USER 
ALTER DATABASE [TriTrain] SET PAGE_VERIFY CHECKSUM  
ALTER DATABASE [TriTrain] SET DB_CHAINING OFF 
ALTER DATABASE [TriTrain] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
ALTER DATABASE [TriTrain] SET TARGET_RECOVERY_TIME = 60 SECONDS 
ALTER DATABASE [TriTrain] SET DELAYED_DURABILITY = DISABLED 
ALTER DATABASE [TriTrain] SET ACCELERATED_DATABASE_RECOVERY = OFF  
EXEC sys.sp_db_vardecimal_storage_format N'TriTrain', N'ON'
ALTER DATABASE [TriTrain] SET QUERY_STORE = OFF
USE [TriTrain]
/****** Object:  Table [dbo].[Answers]    Script Date: 04/11/2024 22:25:52 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[Answers](
	[AnswerID] [int] IDENTITY(1,1) NOT NULL,
	[AnswerText] [varchar](max) NULL,
	[IsCorrect] [bit] NULL,
	[QuestionID] [int] NULL,
	[isActive] [bit] NULL,
 CONSTRAINT [PK_Answers] PRIMARY KEY CLUSTERED 
(
	[AnswerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
/****** Object:  Table [dbo].[categorie]    Script Date: 04/11/2024 22:25:52 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[categorie](
	[CategorieID] [int] IDENTITY(1,1) NOT NULL,
	[Description] [varchar](max) NULL,
	[Image] [varchar](max) NULL,
	[isActive] [bit] NULL,
 CONSTRAINT [PK_categorie] PRIMARY KEY CLUSTERED 
(
	[CategorieID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
/****** Object:  Table [dbo].[Certificate]    Script Date: 04/11/2024 22:25:52 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[Certificate](
	[CertificateID] [int] IDENTITY(1,1) NOT NULL,
	[CertificateName] [varchar](max) NULL,
	[UserID] [int] NULL,
	[CourseID] [int] NULL,
	[isActive] [bit] NULL,
 CONSTRAINT [PK_Certificate] PRIMARY KEY CLUSTERED 
(
	[CertificateID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
/****** Object:  Table [dbo].[Course]    Script Date: 04/11/2024 22:25:52 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[Course](
	[CourseID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](max) NULL,
	[Description] [varchar](max) NULL,
	[LevelID] [int] NULL,
	[CategorieID] [int] NULL,
	[image] [varchar](max) NULL,
	[isActive] [bit] NULL,
	[ReclaimID] [int] NULL,
	[Duration] [int] NULL,
	[FormerId] [int] NULL,
	[Date] [date] NULL,
	[isFavorite] [bit] NULL,
 CONSTRAINT [PK_Course] PRIMARY KEY CLUSTERED 
(
	[CourseID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
/****** Object:  Table [dbo].[EmailConfirmation]    Script Date: 04/11/2024 22:25:52 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[EmailConfirmation](
	[ConfirmationID] [int] IDENTITY(1,1) NOT NULL,
	[ConfirmationToken] [varchar](max) NULL,
	[SentDate] [date] NULL,
	[IsConfirmed] [bit] NULL,
	[UserID] [int] NULL,
	[PaymentID] [int] NULL,
 CONSTRAINT [PK_EmailConfirmation] PRIMARY KEY CLUSTERED 
(
	[ConfirmationID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
/****** Object:  Table [dbo].[ExceptionDB]    Script Date: 04/11/2024 22:25:52 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[ExceptionDB](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Message] [varchar](max) NULL,
	[Stacktrace] [varchar](max) NULL,
	[Data] [varchar](max) NULL,
	[HResult] [varchar](max) NULL,
	[FunctionName] [varchar](max) NULL,
	[InPlaintext] [varchar](max) NULL,
	[Repository] [varchar](max) NULL,
	[CreateDate] [datetime] NULL,
 CONSTRAINT [PK_ExceptionDB] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
/****** Object:  Table [dbo].[Favorite]    Script Date: 04/11/2024 22:25:52 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[Favorite](
	[FavoriteID] [int] IDENTITY(1,1) NOT NULL,
	[UserID] [int] NULL,
	[CourseID] [int] NULL,
 CONSTRAINT [PK_Favorites] PRIMARY KEY CLUSTERED 
(
	[FavoriteID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
/****** Object:  Table [dbo].[Feedback]    Script Date: 04/11/2024 22:25:52 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[Feedback](
	[FeedBackID] [int] IDENTITY(1,1) NOT NULL,
	[FeedBackText] [varchar](max) NULL,
	[Rating] [int] NULL,
	[UserID] [int] NULL,
	[CourseID] [int] NULL,
	[isActive] [bit] NULL,
 CONSTRAINT [PK_Feedback] PRIMARY KEY CLUSTERED 
(
	[FeedBackID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
/****** Object:  Table [dbo].[Invoice]    Script Date: 04/11/2024 22:25:52 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[Invoice](
	[InvoiceID] [int] IDENTITY(1,1) NOT NULL,
	[InvoiceDate] [date] NULL,
	[TotaleAmount] [decimal](10, 2) NULL,
	[PaymentStatus] [varchar](max) NULL,
	[UserID] [int] NULL,
 CONSTRAINT [PK_Invoice] PRIMARY KEY CLUSTERED 
(
	[InvoiceID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
/****** Object:  Table [dbo].[Level]    Script Date: 04/11/2024 22:25:52 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[Level](
	[LevelID] [int] IDENTITY(1,1) NOT NULL,
	[Description] [varchar](max) NULL,
	[isActive] [bit] NULL,
 CONSTRAINT [PK_Level] PRIMARY KEY CLUSTERED 
(
	[LevelID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
/****** Object:  Table [dbo].[Participation]    Script Date: 04/11/2024 22:25:52 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[Participation](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[UserID] [int] NULL,
	[CourseID] [int] NULL,
	[Date] [date] NULL,
 CONSTRAINT [PK_Participation] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
/****** Object:  Table [dbo].[Payment]    Script Date: 04/11/2024 22:25:52 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[Payment](
	[PaymentID] [int] IDENTITY(1,1) NOT NULL,
	[Amount] [decimal](10, 2) NULL,
	[PaymentDate] [date] NULL,
	[PaymentMethodeID] [int] NOT NULL,
	[InvoiceID] [int] NULL,
 CONSTRAINT [PK_Payment] PRIMARY KEY CLUSTERED 
(
	[PaymentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
/****** Object:  Table [dbo].[PaymentMethode]    Script Date: 04/11/2024 22:25:52 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[PaymentMethode](
	[PaymentMethodeID] [int] IDENTITY(1,1) NOT NULL,
	[PaymentMehodeName] [varchar](max) NULL,
 CONSTRAINT [PK_PaymentMethode] PRIMARY KEY CLUSTERED 
(
	[PaymentMethodeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
/****** Object:  Table [dbo].[Question]    Script Date: 04/11/2024 22:25:52 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[Question](
	[QuestionID] [int] IDENTITY(1,1) NOT NULL,
	[Labelle] [varchar](max) NULL,
	[Description] [varchar](max) NULL,
	[TestID] [int] NULL,
	[isActive] [bit] NULL,
 CONSTRAINT [PK_Test-Details] PRIMARY KEY CLUSTERED 
(
	[QuestionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
/****** Object:  Table [dbo].[Reclaim]    Script Date: 04/11/2024 22:25:52 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[Reclaim](
	[ReclaimID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](max) NULL,
	[Description] [varchar](max) NULL,
	[Tag] [varchar](max) NULL,
	[isActive] [bit] NULL,
 CONSTRAINT [PK_Claim] PRIMARY KEY CLUSTERED 
(
	[ReclaimID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
/****** Object:  Table [dbo].[Response]    Script Date: 04/11/2024 22:25:52 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[Response](
	[ResponseID] [int] IDENTITY(1,1) NOT NULL,
	[Value] [varchar](max) NULL,
	[UserID] [int] NULL,
	[QuestionID] [int] NULL,
 CONSTRAINT [PK_Response] PRIMARY KEY CLUSTERED 
(
	[ResponseID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
/****** Object:  Table [dbo].[Response_Details]    Script Date: 04/11/2024 22:25:52 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[Response_Details](
	[ResponseDetailsID] [int] IDENTITY(1,1) NOT NULL,
	[Description] [varchar](max) NOT NULL,
	[ResponseID] [int] NULL,
	[AnswerID] [int] NULL,
 CONSTRAINT [PK_Response_Details] PRIMARY KEY CLUSTERED 
(
	[ResponseDetailsID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
/****** Object:  Table [dbo].[Role]    Script Date: 04/11/2024 22:25:52 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[Role](
	[RoleID] [int] IDENTITY(1,1) NOT NULL,
	[Description] [varchar](max) NULL,
 CONSTRAINT [PK_Role] PRIMARY KEY CLUSTERED 
(
	[RoleID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
/****** Object:  Table [dbo].[Section]    Script Date: 04/11/2024 22:25:52 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[Section](
	[SectionID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](max) NULL,
	[Description] [varchar](max) NULL,
	[CourseID] [int] NULL,
	[isActive] [bit] NULL,
	[Duration] [int] NULL,
 CONSTRAINT [PK_Question] PRIMARY KEY CLUSTERED 
(
	[SectionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
/****** Object:  Table [dbo].[Session]    Script Date: 04/11/2024 22:25:52 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[Session](
	[SessionID] [int] IDENTITY(1,1) NOT NULL,
	[Type] [varchar](max) NULL,
	[Url] [varchar](max) NULL,
	[SectionID] [int] NULL,
	[isActive] [bit] NULL,
	[Title] [varchar](max) NULL,
	[Duration] [int] NULL,
 CONSTRAINT [PK_DetailChapter] PRIMARY KEY CLUSTERED 
(
	[SessionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
/****** Object:  Table [dbo].[Test]    Script Date: 04/11/2024 22:25:52 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[Test](
	[TestID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](max) NULL,
	[Description] [varchar](max) NULL,
	[CourseID] [int] NULL,
	[isActive] [bit] NULL,
 CONSTRAINT [PK_Test] PRIMARY KEY CLUSTERED 
(
	[TestID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
/****** Object:  Table [dbo].[User]    Script Date: 04/11/2024 22:25:52 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[User](
	[UserID] [int] IDENTITY(1,1) NOT NULL,
	[Firstname] [varchar](max) NULL,
	[Email] [varchar](max) NULL,
	[Telephone] [varchar](max) NULL,
	[Addresse] [varchar](max) NULL,
	[RoleID] [int] NULL,
	[Lastname] [varchar](max) NULL,
	[Password] [nchar](10) NULL,
	[RefreshToken] [varchar](max) NULL,
	[TokenRdateCreation] [datetime] NULL,
	[TokenRdateExpiration] [datetime] NULL,
	[Token] [varchar](max) NULL,
	[Etat] [varchar](max) NULL,
	[isActive] [bit] NULL,
	[ReclaimID] [int] NULL,
	[imageUrl] [varchar](max) NULL,
	[Age] [int] NULL,
	[Gender] [varchar](max) NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
ALTER TABLE [dbo].[Answers]  WITH CHECK ADD  CONSTRAINT [FK_Answers_Question] FOREIGN KEY([QuestionID])
REFERENCES [dbo].[Question] ([QuestionID])
ALTER TABLE [dbo].[Answers] CHECK CONSTRAINT [FK_Answers_Question]
ALTER TABLE [dbo].[Certificate]  WITH NOCHECK ADD  CONSTRAINT [FK_Certificate_Course] FOREIGN KEY([CourseID])
REFERENCES [dbo].[Course] ([CourseID])
NOT FOR REPLICATION 
ALTER TABLE [dbo].[Certificate] NOCHECK CONSTRAINT [FK_Certificate_Course]
ALTER TABLE [dbo].[Certificate]  WITH CHECK ADD  CONSTRAINT [FK_Certificate_User] FOREIGN KEY([UserID])
REFERENCES [dbo].[User] ([UserID])
ALTER TABLE [dbo].[Certificate] CHECK CONSTRAINT [FK_Certificate_User]
ALTER TABLE [dbo].[Course]  WITH NOCHECK ADD  CONSTRAINT [FK_Course_Categorie] FOREIGN KEY([CategorieID])
REFERENCES [dbo].[categorie] ([CategorieID])
NOT FOR REPLICATION 
ALTER TABLE [dbo].[Course] NOCHECK CONSTRAINT [FK_Course_Categorie]
ALTER TABLE [dbo].[Course]  WITH NOCHECK ADD  CONSTRAINT [FK_Course_Claim] FOREIGN KEY([ReclaimID])
REFERENCES [dbo].[Reclaim] ([ReclaimID])
NOT FOR REPLICATION 
ALTER TABLE [dbo].[Course] NOCHECK CONSTRAINT [FK_Course_Claim]
ALTER TABLE [dbo].[Course]  WITH NOCHECK ADD  CONSTRAINT [FK_Course_level] FOREIGN KEY([LevelID])
REFERENCES [dbo].[Level] ([LevelID])
NOT FOR REPLICATION 
ALTER TABLE [dbo].[Course] NOCHECK CONSTRAINT [FK_Course_level]
ALTER TABLE [dbo].[EmailConfirmation]  WITH CHECK ADD  CONSTRAINT [FK_EmailConfirmation_Payment] FOREIGN KEY([PaymentID])
REFERENCES [dbo].[Payment] ([PaymentID])
ALTER TABLE [dbo].[EmailConfirmation] CHECK CONSTRAINT [FK_EmailConfirmation_Payment]
ALTER TABLE [dbo].[EmailConfirmation]  WITH CHECK ADD  CONSTRAINT [FK_EmailConfirmation_User] FOREIGN KEY([UserID])
REFERENCES [dbo].[User] ([UserID])
ALTER TABLE [dbo].[EmailConfirmation] CHECK CONSTRAINT [FK_EmailConfirmation_User]
ALTER TABLE [dbo].[Feedback]  WITH NOCHECK ADD  CONSTRAINT [FK_Feedback_Course] FOREIGN KEY([CourseID])
REFERENCES [dbo].[Course] ([CourseID])
NOT FOR REPLICATION 
ALTER TABLE [dbo].[Feedback] NOCHECK CONSTRAINT [FK_Feedback_Course]
ALTER TABLE [dbo].[Feedback]  WITH CHECK ADD  CONSTRAINT [FK_Feedback_User] FOREIGN KEY([UserID])
REFERENCES [dbo].[User] ([UserID])
ALTER TABLE [dbo].[Feedback] CHECK CONSTRAINT [FK_Feedback_User]
ALTER TABLE [dbo].[Invoice]  WITH CHECK ADD  CONSTRAINT [FK_Invoice_User] FOREIGN KEY([UserID])
REFERENCES [dbo].[User] ([UserID])
ALTER TABLE [dbo].[Invoice] CHECK CONSTRAINT [FK_Invoice_User]
ALTER TABLE [dbo].[Participation]  WITH CHECK ADD  CONSTRAINT [FK_Participation_Course] FOREIGN KEY([CourseID])
REFERENCES [dbo].[Course] ([CourseID])
ALTER TABLE [dbo].[Participation] CHECK CONSTRAINT [FK_Participation_Course]
ALTER TABLE [dbo].[Participation]  WITH CHECK ADD  CONSTRAINT [FK_Participation_User] FOREIGN KEY([UserID])
REFERENCES [dbo].[User] ([UserID])
ON UPDATE CASCADE
ON DELETE CASCADE
ALTER TABLE [dbo].[Participation] CHECK CONSTRAINT [FK_Participation_User]
ALTER TABLE [dbo].[Payment]  WITH CHECK ADD  CONSTRAINT [FK_Payment_Invoice] FOREIGN KEY([InvoiceID])
REFERENCES [dbo].[Invoice] ([InvoiceID])
ALTER TABLE [dbo].[Payment] CHECK CONSTRAINT [FK_Payment_Invoice]
ALTER TABLE [dbo].[Payment]  WITH CHECK ADD  CONSTRAINT [FK_Payment_PaymentMethode] FOREIGN KEY([PaymentMethodeID])
REFERENCES [dbo].[PaymentMethode] ([PaymentMethodeID])
ALTER TABLE [dbo].[Payment] CHECK CONSTRAINT [FK_Payment_PaymentMethode]
ALTER TABLE [dbo].[Question]  WITH NOCHECK ADD  CONSTRAINT [FK_Question_Test] FOREIGN KEY([TestID])
REFERENCES [dbo].[Test] ([TestID])
NOT FOR REPLICATION 
ALTER TABLE [dbo].[Question] NOCHECK CONSTRAINT [FK_Question_Test]
ALTER TABLE [dbo].[Response]  WITH CHECK ADD  CONSTRAINT [FK_Response_Question] FOREIGN KEY([QuestionID])
REFERENCES [dbo].[Question] ([QuestionID])
ALTER TABLE [dbo].[Response] CHECK CONSTRAINT [FK_Response_Question]
ALTER TABLE [dbo].[Response]  WITH CHECK ADD  CONSTRAINT [FK_Response_User] FOREIGN KEY([UserID])
REFERENCES [dbo].[User] ([UserID])
ALTER TABLE [dbo].[Response] CHECK CONSTRAINT [FK_Response_User]
ALTER TABLE [dbo].[Response_Details]  WITH CHECK ADD  CONSTRAINT [FK_Response_Details_Answers] FOREIGN KEY([AnswerID])
REFERENCES [dbo].[Answers] ([AnswerID])
ALTER TABLE [dbo].[Response_Details] CHECK CONSTRAINT [FK_Response_Details_Answers]
ALTER TABLE [dbo].[Response_Details]  WITH CHECK ADD  CONSTRAINT [FK_Response_Details_Response] FOREIGN KEY([ResponseID])
REFERENCES [dbo].[Response] ([ResponseID])
ALTER TABLE [dbo].[Response_Details] CHECK CONSTRAINT [FK_Response_Details_Response]
ALTER TABLE [dbo].[Section]  WITH NOCHECK ADD  CONSTRAINT [FK_Question_Course] FOREIGN KEY([CourseID])
REFERENCES [dbo].[Course] ([CourseID])
NOT FOR REPLICATION 
ALTER TABLE [dbo].[Section] NOCHECK CONSTRAINT [FK_Question_Course]
ALTER TABLE [dbo].[Session]  WITH NOCHECK ADD  CONSTRAINT [FK_Session_Section] FOREIGN KEY([SectionID])
REFERENCES [dbo].[Section] ([SectionID])
NOT FOR REPLICATION 
ALTER TABLE [dbo].[Session] NOCHECK CONSTRAINT [FK_Session_Section]
ALTER TABLE [dbo].[Test]  WITH NOCHECK ADD  CONSTRAINT [FK_Test_course] FOREIGN KEY([CourseID])
REFERENCES [dbo].[Course] ([CourseID])
NOT FOR REPLICATION 
ALTER TABLE [dbo].[Test] NOCHECK CONSTRAINT [FK_Test_course]
ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_Claim] FOREIGN KEY([ReclaimID])
REFERENCES [dbo].[Reclaim] ([ReclaimID])
ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_Claim]
ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_Role] FOREIGN KEY([RoleID])
REFERENCES [dbo].[Role] ([RoleID])
ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_Role]
ALTER DATABASE [TriTrain] SET  READ_WRITE 
