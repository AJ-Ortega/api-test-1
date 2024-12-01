CREATE TABLE test.proyecto(
	codigoProyecto INT IDENTITY(1,1) NOT NULL,
	codigoEmpresa INT NOT NULL,
	nombreProyecto VARCHAR(128) NOT NULL,
	codigoUsuarioAnalista INT NOT NULL,
	codigoUsuarioSupervisor INT NOT NULL,

	fechaInicio DATE NULL,
	fechaFin DATE NULL,

	hitoUno VARCHAR(256) NULL,
	fechaHitoUno DATE NULL,

	hitoDos VARCHAR(256) NULL,
	fechaHitoDos DATE NULL,

	hitoTres VARCHAR(256) NULL,
	fechaHitoTres DATE NULL,

	hitoCuatro VARCHAR(256) NULL,
	fechaHitoCuatro DATE NULL,

	estatus INT NOT NULL,
	createdAt DATETIME NULL,
    updatedAt DATETIME NULL,
	CONSTRAINT pk_testproyecto_codigoproyecto PRIMARY KEY CLUSTERED (codigoProyecto ASC),
	CONSTRAINT fk_testproyecto_adempresa FOREIGN KEY (codigoEmpresa) REFERENCES ad.empresa(codigoEmpresa)
)