
CREATE TABLE test.testcase(
	codigoTestCase INT IDENTITY(1,1) NOT NULL,
	codigoTestPlan INT NOT NULL,
	nombreTestCase VARCHAR(128) NOT NULL,
	datoPrueba VARCHAR(1024) NULL,
	pasoPrueba VARCHAR(1024) NULL,
	resultadoEsperado VARCHAR(1024) NULL,
	resultadoObtenido VARCHAR(1024) NULL,

	estatus INT NOT NULL, --1=Activo, 2= Inactivo, 3= Eliminado, 4=Certificado, 5=Fallido; 6=Bloqueado
	createdAt DATETIME NULL,
    updatedAt DATETIME NULL,
	CONSTRAINT pk_testcase_codigotestcase PRIMARY KEY CLUSTERED (codigoTestCase ASC),
	CONSTRAINT fk_testcase_testplan FOREIGN KEY (codigoTestPlan) REFERENCES test.testplan(codigoTestPlan)
)