USE [master]
--GO
--/****** Object:  Database [HandToHandd]    Script Date: 3/27/2022 2:28:07 AM ******/
--CREATE DATABASE [HandToHandd]
-- CONTAINMENT = NONE
-- ON  PRIMARY 
--( NAME = N'HandToHandd', FILENAME = N'C:\Users\odayay\HandToHandd.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
-- LOG ON 
--( NAME = N'HandToHandd_log', FILENAME = N'C:\Users\odayay\HandToHandd_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
-- WITH CATALOG_COLLATION = DATABASE_DEFAULT
--GO
ALTER DATABASE [HandToHandd] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [HandToHandd].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [HandToHandd] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [HandToHandd] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [HandToHandd] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [HandToHandd] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [HandToHandd] SET ARITHABORT OFF 
GO
ALTER DATABASE [HandToHandd] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [HandToHandd] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [HandToHandd] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [HandToHandd] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [HandToHandd] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [HandToHandd] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [HandToHandd] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [HandToHandd] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [HandToHandd] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [HandToHandd] SET  DISABLE_BROKER 
GO
ALTER DATABASE [HandToHandd] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [HandToHandd] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [HandToHandd] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [HandToHandd] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [HandToHandd] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [HandToHandd] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [HandToHandd] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [HandToHandd] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [HandToHandd] SET  MULTI_USER 
GO
ALTER DATABASE [HandToHandd] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [HandToHandd] SET DB_CHAINING OFF 
GO
ALTER DATABASE [HandToHandd] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [HandToHandd] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [HandToHandd] SET DELAYED_DURABILITY = DISABLED 
GO
--ALTER DATABASE [HandToHandd] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [HandToHandd] SET QUERY_STORE = OFF
GO
USE [HandToHandd]
GO
/****** Object:  Table [dbo].[TypeOfVolunteering_ForUsers]    Script Date: 3/27/2022 2:28:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TypeOfVolunteering_ForUsers](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [bigint] NULL,
	[TypeOfVolunteeringId] [bigint] NULL,
	[days] [nvarchar](max) NULL,
	[startHour] [time](7) NULL,
	[endHour] [time](7) NULL,
 CONSTRAINT [PK_TypeOfVolunteering_ForUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 3/27/2022 2:28:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserId] [bigint] IDENTITY(1,1) NOT NULL,
	[UserFirstName] [nvarchar](50) NOT NULL,
	[UserLastName] [nvarchar](50) NOT NULL,
	[UserPhone] [varchar](50) NOT NULL,
	[UserPassword] [nvarchar](50) NOT NULL,
	[UserMail] [nvarchar](50) NOT NULL,
	[UserAdress] [nvarchar](50) NOT NULL,
	[AreaId] [int] NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Volunteerings]    Script Date: 3/27/2022 2:28:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Volunteerings](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[TypeOfVolunteering_ForUsersId] [int] NULL,
	[RequesterId] [bigint] NULL,
	[Status] [int] NULL,
	[Rating] [int] NULL,
	[Comment] [nvarchar](max) NULL,
	[CommentDate] [datetime] NULL,
	[days] [nvarchar](max) NULL,
	[startHour] [time](7) NULL,
	[endHour] [time](7) NULL,
	[startDate] [date] NULL,
	[endDate] [date] NULL,
 CONSTRAINT [PK_Volunteerings] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  View [dbo].[Rating]    Script Date: 3/27/2022 2:28:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE view [dbo].[Rating]
AS
select u.UserId, isnull(AVG(Rating), 0) as ratingAvg, COUNT(Rating) as ratingCount from Volunteerings v 
right join TypeOfVolunteering_ForUsers t
on v.TypeOfVolunteering_ForUsersId = t.Id
right join Users u on u.UserId = t.UserId group by u.UserId

GO
/****** Object:  View [dbo].[VolunteerView]    Script Date: 3/27/2022 2:28:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[VolunteerView]
AS
select u.*, Count(u.UserId) as TypeOfVolunteeringsCount from Users u right join TypeOfVolunteering_ForUsers t 
on u.UserId = t.UserId group by u.UserId, u.UserFirstName, u.UserLastName, u.UserPhone, 
u.UserPassword, UserMail, UserAdress, AreaId

GO
/****** Object:  Table [dbo].[Areas]    Script Date: 3/27/2022 2:28:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Areas](
	[AreaId] [int] IDENTITY(1,1) NOT NULL,
	[AreaName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Areas] PRIMARY KEY CLUSTERED 
(
	[AreaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BlockedUsers]    Script Date: 3/27/2022 2:28:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BlockedUsers](
	[UserId] [bigint] NOT NULL,
 CONSTRAINT [PK_BlockedUsers] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FavoriteVolunteersToUsers]    Script Date: 3/27/2022 2:28:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FavoriteVolunteersToUsers](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[userId] [bigint] NULL,
	[volunteerId] [bigint] NULL,
 CONSTRAINT [PK_FavoriteVolunteersToUsers] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Status]    Script Date: 3/27/2022 2:28:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Status](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
 CONSTRAINT [PK_Status] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TypeOfVolunteerings]    Script Date: 3/27/2022 2:28:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TypeOfVolunteerings](
	[TypeOfVolunteeringId] [bigint] IDENTITY(1,1) NOT NULL,
	[TypeOfVolunteeringName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_TypeOfVolunteerings] PRIMARY KEY CLUSTERED 
(
	[TypeOfVolunteeringId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Status] ON 

INSERT [dbo].[Status] ([id], [name]) VALUES (1, N'ממתין לאישור')
INSERT [dbo].[Status] ([id], [name]) VALUES (2, N'אושר')
INSERT [dbo].[Status] ([id], [name]) VALUES (3, N'נדחה')
INSERT [dbo].[Status] ([id], [name]) VALUES (4, N'בוצע')
SET IDENTITY_INSERT [dbo].[Status] OFF
GO
SET IDENTITY_INSERT [dbo].[TypeOfVolunteering_ForUsers] ON 

INSERT [dbo].[TypeOfVolunteering_ForUsers] ([Id], [UserId], [TypeOfVolunteeringId], [days], [startHour], [endHour]) VALUES (1, 4, 1, N'1,2,3', CAST(N'13:00:00' AS Time), CAST(N'15:30:00' AS Time))
INSERT [dbo].[TypeOfVolunteering_ForUsers] ([Id], [UserId], [TypeOfVolunteeringId], [days], [startHour], [endHour]) VALUES (2, 4, 3, N'4', CAST(N'19:45:00' AS Time), CAST(N'21:00:00' AS Time))
INSERT [dbo].[TypeOfVolunteering_ForUsers] ([Id], [UserId], [TypeOfVolunteeringId], [days], [startHour], [endHour]) VALUES (1010, 4, 2, N'5,6', CAST(N'11:00:00' AS Time), CAST(N'14:30:00' AS Time))
INSERT [dbo].[TypeOfVolunteering_ForUsers] ([Id], [UserId], [TypeOfVolunteeringId], [days], [startHour], [endHour]) VALUES (2004, 2, 2, N'3,4,5', CAST(N'14:30:00' AS Time), CAST(N'16:30:00' AS Time))
INSERT [dbo].[TypeOfVolunteering_ForUsers] ([Id], [UserId], [TypeOfVolunteeringId], [days], [startHour], [endHour]) VALUES (4004, 4, 10001, N'2,4', CAST(N'18:00:00' AS Time), CAST(N'18:45:00' AS Time))
INSERT [dbo].[TypeOfVolunteering_ForUsers] ([Id], [UserId], [TypeOfVolunteeringId], [days], [startHour], [endHour]) VALUES (5004, 2, 1, N'1', CAST(N'18:00:00' AS Time), CAST(N'18:45:00' AS Time))
INSERT [dbo].[TypeOfVolunteering_ForUsers] ([Id], [UserId], [TypeOfVolunteeringId], [days], [startHour], [endHour]) VALUES (5005, 8, 10002, N'2,3,4', CAST(N'11:00:00' AS Time), CAST(N'15:00:00' AS Time))
INSERT [dbo].[TypeOfVolunteering_ForUsers] ([Id], [UserId], [TypeOfVolunteeringId], [days], [startHour], [endHour]) VALUES (5006, 8, 10003, N'1,4,5', CAST(N'13:00:00' AS Time), CAST(N'17:00:00' AS Time))
INSERT [dbo].[TypeOfVolunteering_ForUsers] ([Id], [UserId], [TypeOfVolunteeringId], [days], [startHour], [endHour]) VALUES (5007, 8, 10005, N'4,5', CAST(N'18:00:00' AS Time), CAST(N'22:00:00' AS Time))
INSERT [dbo].[TypeOfVolunteering_ForUsers] ([Id], [UserId], [TypeOfVolunteeringId], [days], [startHour], [endHour]) VALUES (5008, 8, 10006, N'5,6', CAST(N'08:00:00' AS Time), CAST(N'09:30:00' AS Time))
INSERT [dbo].[TypeOfVolunteering_ForUsers] ([Id], [UserId], [TypeOfVolunteeringId], [days], [startHour], [endHour]) VALUES (5009, 9, 10001, N'3', CAST(N'07:00:00' AS Time), CAST(N'08:30:00' AS Time))
INSERT [dbo].[TypeOfVolunteering_ForUsers] ([Id], [UserId], [TypeOfVolunteeringId], [days], [startHour], [endHour]) VALUES (5010, 9, 10004, N'1,4,5', CAST(N'13:00:00' AS Time), CAST(N'15:00:00' AS Time))
SET IDENTITY_INSERT [dbo].[TypeOfVolunteering_ForUsers] OFF
GO
SET IDENTITY_INSERT [dbo].[TypeOfVolunteerings] ON 

INSERT [dbo].[TypeOfVolunteerings] ([TypeOfVolunteeringId], [TypeOfVolunteeringName]) VALUES (1, N'מורה פרטי')
INSERT [dbo].[TypeOfVolunteerings] ([TypeOfVolunteeringId], [TypeOfVolunteeringName]) VALUES (2, N'גיהוץ')
INSERT [dbo].[TypeOfVolunteerings] ([TypeOfVolunteeringId], [TypeOfVolunteeringName]) VALUES (3, N'כריכת ספרים')
INSERT [dbo].[TypeOfVolunteerings] ([TypeOfVolunteeringId], [TypeOfVolunteeringName]) VALUES (10001, N'אינסטלציה')
INSERT [dbo].[TypeOfVolunteerings] ([TypeOfVolunteeringId], [TypeOfVolunteeringName]) VALUES (10002, N'בישול')
INSERT [dbo].[TypeOfVolunteerings] ([TypeOfVolunteeringId], [TypeOfVolunteeringName]) VALUES (10003, N'עטיפת ספרים')
INSERT [dbo].[TypeOfVolunteerings] ([TypeOfVolunteeringId], [TypeOfVolunteeringName]) VALUES (10004, N'שטיפת כלים')
INSERT [dbo].[TypeOfVolunteerings] ([TypeOfVolunteeringId], [TypeOfVolunteeringName]) VALUES (10005, N'בייביסיטר')
INSERT [dbo].[TypeOfVolunteerings] ([TypeOfVolunteeringId], [TypeOfVolunteeringName]) VALUES (10006, N'עריכת קניות בסופר')
SET IDENTITY_INSERT [dbo].[TypeOfVolunteerings] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([UserId], [UserFirstName], [UserLastName], [UserPhone], [UserPassword], [UserMail], [UserAdress], [AreaId]) VALUES (2, N'מיכל', N'לוי', N'0504130080', N'abc123!', N'odaya@gmail.com', N'בני ברק', NULL)
INSERT [dbo].[Users] ([UserId], [UserFirstName], [UserLastName], [UserPhone], [UserPassword], [UserMail], [UserAdress], [AreaId]) VALUES (3, N'יעקב', N'כהן', N'035734565', N'123456', N'bsd@gmail.com', N'בני ברק', NULL)
INSERT [dbo].[Users] ([UserId], [UserFirstName], [UserLastName], [UserPhone], [UserPassword], [UserMail], [UserAdress], [AreaId]) VALUES (4, N'דסי', N'לוין', N'0527688888', N'888888', N'dasi@gmail.com', N'אלעד', NULL)
INSERT [dbo].[Users] ([UserId], [UserFirstName], [UserLastName], [UserPhone], [UserPassword], [UserMail], [UserAdress], [AreaId]) VALUES (5, N'מלי', N'ברוך', N'533134455', N'מליברוך', N'mali@gmail.com', N'ירושלים', NULL)
INSERT [dbo].[Users] ([UserId], [UserFirstName], [UserLastName], [UserPhone], [UserPassword], [UserMail], [UserAdress], [AreaId]) VALUES (6, N'מלי', N'ברוך', N'533134455', N'מליברוך', N'mali@gmail.com', N'ירושלים', NULL)
INSERT [dbo].[Users] ([UserId], [UserFirstName], [UserLastName], [UserPhone], [UserPassword], [UserMail], [UserAdress], [AreaId]) VALUES (7, N'מלי', N'ברוך', N'533134455', N'מליברוך', N'mali@gmail.com', N'ירושלים', NULL)
INSERT [dbo].[Users] ([UserId], [UserFirstName], [UserLastName], [UserPhone], [UserPassword], [UserMail], [UserAdress], [AreaId]) VALUES (8, N'ברכה', N'יצחקי', N'02-5438876', N'121212', N'b@gmail.com', N'ירושלים', NULL)
INSERT [dbo].[Users] ([UserId], [UserFirstName], [UserLastName], [UserPhone], [UserPassword], [UserMail], [UserAdress], [AreaId]) VALUES (9, N'יהודית', N'מילר', N'0533122212', N'222222', N'y@gmail.com', N'אשדוד', NULL)
INSERT [dbo].[Users] ([UserId], [UserFirstName], [UserLastName], [UserPhone], [UserPassword], [UserMail], [UserAdress], [AreaId]) VALUES (10, N'מלכה', N'בן דוד', N'0533124512', N'454545', N'm@gmail.com', N'אלעד', NULL)
INSERT [dbo].[Users] ([UserId], [UserFirstName], [UserLastName], [UserPhone], [UserPassword], [UserMail], [UserAdress], [AreaId]) VALUES (11, N'אפרת', N'מיכאלי', N'054-8508908', N'909090', N'e@gmail.com', N'אשדוד', NULL)
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
SET IDENTITY_INSERT [dbo].[Volunteerings] ON 

INSERT [dbo].[Volunteerings] ([Id], [TypeOfVolunteering_ForUsersId], [RequesterId], [Status], [Rating], [Comment], [CommentDate], [days], [startHour], [endHour], [startDate], [endDate]) VALUES (1, 2, 2, 4, NULL, NULL, NULL, N'4,5', CAST(N'20:00:00' AS Time), CAST(N'21:00:00' AS Time), CAST(N'2022-02-12' AS Date), CAST(N'2022-02-21' AS Date))
INSERT [dbo].[Volunteerings] ([Id], [TypeOfVolunteering_ForUsersId], [RequesterId], [Status], [Rating], [Comment], [CommentDate], [days], [startHour], [endHour], [startDate], [endDate]) VALUES (2, 2004, 4, 4, 10, N'השירות היה מושלם! ממליצה בחום', CAST(N'2022-03-19T19:55:41.947' AS DateTime), N'1', CAST(N'14:30:00' AS Time), CAST(N'15:30:00' AS Time), CAST(N'2022-02-12' AS Date), CAST(N'2022-02-21' AS Date))
INSERT [dbo].[Volunteerings] ([Id], [TypeOfVolunteering_ForUsersId], [RequesterId], [Status], [Rating], [Comment], [CommentDate], [days], [startHour], [endHour], [startDate], [endDate]) VALUES (2006, 2004, 4, 1, NULL, NULL, NULL, N'2', CAST(N'14:30:00' AS Time), CAST(N'15:30:00' AS Time), CAST(N'2022-03-30' AS Date), CAST(N'2022-04-07' AS Date))
INSERT [dbo].[Volunteerings] ([Id], [TypeOfVolunteering_ForUsersId], [RequesterId], [Status], [Rating], [Comment], [CommentDate], [days], [startHour], [endHour], [startDate], [endDate]) VALUES (2007, 5007, 4, 4, 9, N'ממליצה בחום!', CAST(N'2022-03-27T02:17:19.347' AS DateTime), N'4', CAST(N'18:00:00' AS Time), CAST(N'19:30:00' AS Time), CAST(N'2022-03-30' AS Date), CAST(N'2022-04-07' AS Date))
INSERT [dbo].[Volunteerings] ([Id], [TypeOfVolunteering_ForUsersId], [RequesterId], [Status], [Rating], [Comment], [CommentDate], [days], [startHour], [endHour], [startDate], [endDate]) VALUES (2008, 1010, 8, 1, NULL, NULL, NULL, NULL, CAST(N'11:45:00' AS Time), CAST(N'14:00:00' AS Time), CAST(N'2022-04-06' AS Date), CAST(N'2022-04-13' AS Date))
INSERT [dbo].[Volunteerings] ([Id], [TypeOfVolunteering_ForUsersId], [RequesterId], [Status], [Rating], [Comment], [CommentDate], [days], [startHour], [endHour], [startDate], [endDate]) VALUES (2009, 5006, 9, 1, NULL, NULL, NULL, NULL, CAST(N'13:00:00' AS Time), CAST(N'14:30:00' AS Time), CAST(N'2022-04-07' AS Date), CAST(N'2022-05-04' AS Date))
SET IDENTITY_INSERT [dbo].[Volunteerings] OFF
GO
/****** Object:  Index [IX_FK__Users__AreaId__49C3F6B7]    Script Date: 3/27/2022 2:28:07 AM ******/
CREATE NONCLUSTERED INDEX [IX_FK__Users__AreaId__49C3F6B7] ON [dbo].[Users]
(
	[AreaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BlockedUsers]  WITH CHECK ADD  CONSTRAINT [FK_BlockedUsers_Users] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[BlockedUsers] CHECK CONSTRAINT [FK_BlockedUsers_Users]
GO
ALTER TABLE [dbo].[Volunteerings]  WITH CHECK ADD  CONSTRAINT [FK_Volunteerings_Status] FOREIGN KEY([Status])
REFERENCES [dbo].[Status] ([id])
GO
ALTER TABLE [dbo].[Volunteerings] CHECK CONSTRAINT [FK_Volunteerings_Status]
GO
ALTER TABLE [dbo].[Volunteerings]  WITH CHECK ADD  CONSTRAINT [FK_Volunteerings_TypeOfVolunteering_ForUsers] FOREIGN KEY([TypeOfVolunteering_ForUsersId])
REFERENCES [dbo].[TypeOfVolunteering_ForUsers] ([Id])
GO
ALTER TABLE [dbo].[Volunteerings] CHECK CONSTRAINT [FK_Volunteerings_TypeOfVolunteering_ForUsers]
GO
ALTER TABLE [dbo].[Volunteerings]  WITH CHECK ADD  CONSTRAINT [FK_Volunteerings_Users] FOREIGN KEY([RequesterId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[Volunteerings] CHECK CONSTRAINT [FK_Volunteerings_Users]
GO
/****** Object:  StoredProcedure [dbo].[GetCommentToVolunteer]    Script Date: 3/27/2022 2:28:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetCommentToVolunteer] @volunteerId bigint
AS
select requester.UserFirstName + ' ' + requester.UserLastName as RequesterName, Comment, CommentDate from Volunteerings v left join TypeOfVolunteering_ForUsers t
on v.TypeOfVolunteering_ForUsersId = t.Id left join 
Users requester on requester.UserId = v.RequesterId 
where t.UserId = @volunteerId and Comment is not null
GO
/****** Object:  StoredProcedure [dbo].[GetSuitableVolunteers]    Script Date: 3/27/2022 2:28:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetSuitableVolunteers] @typeOfVolunteeringId bigint, @startHour time(7), @endHour time(7)
AS
select t.*, UserFirstName, UserLastName, UserAdress from TypeOfVolunteering_ForUsers t left join Users u 
on u.UserId = t.UserId
where ((@typeOfVolunteeringId is not null and TypeOfVolunteeringId = @typeOfVolunteeringId) or 
(@typeOfVolunteeringId is null)) and 
((@startHour is not null and @endHour is not null and startHour <= @startHour and endHour >= @endHour) or 
(@startHour is null or @endHour is null))

GO
/****** Object:  StoredProcedure [dbo].[GetVolunteeringDetailsOfUser]    Script Date: 3/27/2022 2:28:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[GetVolunteeringDetailsOfUser] @UesrId bigint
AS
select t_for_u.Id, TypeOfVolunteeringName, days, startHour, endHour from Users u
left join TypeOfVolunteering_ForUsers t_for_u 
on u.UserId = t_for_u.[UserId]
left join TypeOfVolunteerings t
on t.TypeOfVolunteeringId = t_for_u.[TypeOfVolunteeringId]
where u.UserId = @UesrId

GO
/****** Object:  StoredProcedure [dbo].[GetVolunteeringsByRequester]    Script Date: 3/27/2022 2:28:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[GetVolunteeringsByRequester] @UesrId bigint
AS
select v.Id as VolunteeringId, u.UserId as VolunteerId, u.UserFirstName as volunteerFirstName, u.UserLastName as VolunteerLastName, 
t.TypeOfVolunteeringName, v.days, v.startHour, v.endHour, v.startDate, v.endDate, 
s.name as Status, Rating, Comment, CommentDate
from Users u
left join TypeOfVolunteering_ForUsers t_for_u 
on u.UserId = t_for_u.[UserId]
left join TypeOfVolunteerings t
on t.TypeOfVolunteeringId = t_for_u.[TypeOfVolunteeringId]
left join Volunteerings v 
on v.TypeOfVolunteering_ForUsersId = t_for_u.[Id]
left join Status s
on s.id = v.Status
right join Users requester
on requester.UserId = v.RequesterId
where requester.UserId = @UesrId

GO
/****** Object:  StoredProcedure [dbo].[GetVolunteeringsByVolunteer]    Script Date: 3/27/2022 2:28:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE [dbo].[GetVolunteeringsByVolunteer] @UesrId bigint
AS
select v.Id as volunteeringId, requester.UserId as ReqId, requester.UserFirstName as ReqFirstName, requester.UserLastName as ReqLastName, 
t.TypeOfVolunteeringName, v.days, v.startHour, v.endHour, v.startDate, v.endDate, 
s.name as Status, Rating, Comment, CommentDate
from Users u
left join TypeOfVolunteering_ForUsers t_for_u 
on u.UserId = t_for_u.[UserId]
left join TypeOfVolunteerings t
on t.TypeOfVolunteeringId = t_for_u.[TypeOfVolunteeringId]
left join Volunteerings v 
on v.TypeOfVolunteering_ForUsersId = t_for_u.[Id]
left join Status s
on s.id = v.Status
right join Users requester
on requester.UserId = v.RequesterId
where u.UserId = @UesrId

GO
/****** Object:  StoredProcedure [dbo].[getVolunteers]    Script Date: 3/27/2022 2:28:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[getVolunteers] @userId bigint
as 
select u.UserId, UserFirstName, UserLastName, UserAdress, 
Count(u.UserId) as TypeOfVolunteeringsCount, 
cast(case when @userId in (select [userId] from [dbo].[FavoriteVolunteersToUsers] where [volunteerId]=u.UserId)
then 'True' else 'False' end as bit) as favorited
from Users u right join TypeOfVolunteering_ForUsers t 
on u.UserId = t.UserId group by u.UserId, u.UserFirstName, u.UserLastName, UserAdress
GO
/****** Object:  StoredProcedure [dbo].[GetVolunteersByType]    Script Date: 3/27/2022 2:28:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetVolunteersByType] @userId bigint, @typeOfVolunteeringId bigint
AS
select u.UserId, UserFirstName, UserLastName, UserAdress, t.startHour, t.endHour, t.days,
Count(u.UserId) as TypeOfVolunteeringsCount, 
cast(case when @userId in (select [userId] from [dbo].[FavoriteVolunteersToUsers] where [volunteerId]=u.UserId)
then 'True' else 'False' end as bit) as favorited
from Users u right join TypeOfVolunteering_ForUsers t 
on u.UserId = t.UserId
where @typeOfVolunteeringId is not null and TypeOfVolunteeringId = @typeOfVolunteeringId 
group by u.UserId, u.UserFirstName, u.UserLastName, UserAdress, t.startHour, t.endHour, t.days


GO
USE [master]
GO
ALTER DATABASE [HandToHandd] SET  READ_WRITE 
GO
