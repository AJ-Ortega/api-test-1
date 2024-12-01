
CREATE TABLE test.testcaseDocumento(
	codigoTestCaseDocumento INT IDENTITY(1,1) NOT NULL,
	codigoTestCase INT NOT NULL,
	nombreArchivo VARCHAR(512) NOT NULL,
    extension VARCHAR(8) NULL,

	estatus INT NOT NULL, --1=Activo, 2= Inactivo, 3= Eliminado, 4=Pasó, 5=No pasó; 6=Bloqueo
	createdAt DATETIME NULL,
    updatedAt DATETIME NULL,
	CONSTRAINT pk_testcasedocumento_codigotestcasedocumento PRIMARY KEY CLUSTERED (codigoTestCaseDocumento ASC),
	CONSTRAINT fk_testcasedocumento_testcase FOREIGN KEY (codigoTestCase) REFERENCES test.testcase(codigoTestCase)
)