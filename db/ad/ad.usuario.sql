	
CREATE TABLE ad.usuario(
	codigoUsuario INT IDENTITY(1,1) NOT NULL,
	codigoEmpresa INT NOT NULL,
	usuario VARCHAR(128) NOT NULL,
	clave VARCHAR(128) NOT NULL,
	tipoTecnico INT NOT NULL, --1 = NO TECNICO, 2 = ANALISTA QA, 3 = JEFE
	estatus INT NOT NULL,
	createdAt DATETIME NULL,
    updatedAt DATETIME NULL,
	CONSTRAINT pk_adempresa_codigoUsuario PRIMARY KEY CLUSTERED (codigoUsuario ASC)
	CONSTRAINT fk_adusuario_adempresa FOREIGN KEY (codigoEmpresa) REFERENCES ad.empresa(codigoEmpresa)
)