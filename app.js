require("dotenv").config(); //Este siempre tiene que ir en la primera línea, caso contrario no funcionará.
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { dbConectarMSSQL } = require("./config/mssql");

const app = express();

const puerto = process.env.PORT || 300;
const host = process.env.HOST;

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));


/**Iniciar el servicio nodejs del API en el puerto indicado. */
app.listen(puerto, host, () => {
  console.log("<===================================================>");
  console.log("API-TESTING (INICIADO)", `${host}:${puerto}`);
  console.log("<===================================================>");
});

/**Listado de las Rutas de la API */
app.use("/api", require("./routes"));

/**Se inicia la conexión con base de datos MSSQL */
dbConectarMSSQL();