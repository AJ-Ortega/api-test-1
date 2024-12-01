const { Sequelize } = require("sequelize");

const basedatos = process.env.MSSQL_DATABASE;
const usuario = process.env.MSSQL_USER;
const clave = process.env.MSSQL_PASSWORD;
const host = process.env.MSSQL_HOST;
const port = process.env.MSSQL_PUERTO;

const sequelize = new Sequelize(basedatos, usuario, clave, {
  host,
  port,
  dialect: "mssql",
});

const dbConectarMSSQL = async () => {
try {
    await sequelize.authenticate();
    console.log("<===================================================>");
    console.log("CONEXIÓN EXITOSA (BD|HOST|PUERTO)", `${basedatos}|${host}|${port}`);
    console.log("<===================================================>");
} catch (error) {
    console.log('ERROR al conectar con MSSQL', basedatos);
    console.log({error});
}
};

module.exports={sequelize, dbConectarMSSQL};