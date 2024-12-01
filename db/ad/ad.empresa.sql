	
CREATE TABLE ad.empresa(
	codigoEmpresa INT IDENTITY(1,1) NOT NULL,
	nombreEmpresa VARCHAR(128) NOT NULL,
	estatus INT NOT NULL,
	createdAt DATETIME NULL,
    updatedAt DATETIME NULL,
	CONSTRAINT pk_adempresa_codigoEmpresa PRIMARY KEY CLUSTERED (codigoEmpresa ASC)
)