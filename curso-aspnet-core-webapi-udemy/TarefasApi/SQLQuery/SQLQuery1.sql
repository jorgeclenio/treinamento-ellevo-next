USE TarefasDemoDB
GO

CREATE TABLE [dbo].Tarefas(
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Atividade] [nvarchar](255),
	[Status] [nvarchar](100),
)
GO