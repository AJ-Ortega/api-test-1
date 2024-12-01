
CREATE TABLE test.testplan(
	codigoTestPlan INT IDENTITY(1,1) NOT NULL,
	codigoProyecto INT NOT NULL,
	nombreTestPlan VARCHAR(128) NOT NULL,
	criterioAceptacion VARCHAR(1024) NOT NULL,
	estatus INT NOT NULL,
	createdAt DATETIME NULL,
    updatedAt DATETIME NULL,
	CONSTRAINT pk_testplan_codigotestplan PRIMARY KEY CLUSTERED (codigoTestPlan ASC),
	CONSTRAINT fk_testplan_testproyecto FOREIGN KEY (codigoProyecto) REFERENCES test.proyecto(codigoProyecto)
)