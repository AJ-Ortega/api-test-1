const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;

const quitarExtension = (archivo) => {
  return archivo.split(".").shift();
};

fs.readdirSync(PATH_ROUTES).filter((archivo) => {
  const nombreArchivo = quitarExtension(archivo);
  if (nombreArchivo !== "index") {
    router.use(`/${nombreArchivo}`, require(`./${archivo}`));
  }
});

module.exports = router;
