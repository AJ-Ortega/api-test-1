
CREATE TABLE test.testcaseDefecto(
	codigoTestCaseDefecto INT IDENTITY(1,1) NOT NULL,
	codigoTestCase INT NOT NULL,
	nombreDefecto VARCHAR(512) NOT NULL,
    codigoUsuarioAnalista INT NOT NULL,
	codigoUsuarioSupervisor INT NOT NULL,

	datoPrueba VARCHAR(1024) NULL,
	pasoPrueba VARCHAR(1024) NULL,
	resultadoEsperado VARCHAR(1024) NULL,
	resultadoObtenido VARCHAR(1024) NULL,

	estatus INT NOT NULL, --1=Activo, 2= Inactivo, 3= Eliminado, 4=Revisado, 5=Liberado; 6=Certificado
	createdAt DATETIME NULL,
    updatedAt DATETIME NULL,
	CONSTRAINT pk_testcasedefecto_codigotestcasedocumento PRIMARY KEY CLUSTERED (codigoTestCaseDefecto ASC),
	CONSTRAINT fk_testcasedefecto_testcase FOREIGN KEY (codigoTestCase) REFERENCES test.testcase(codigoTestCase)
)