const express = require("express");

const router = express.Router();
const {
  getProyecto,
  getProyectoPorCodigo,
  getProyectoBuscar,
  insertProyecto,
  updateProyecto,
} = require("../controllers/proyecto-controller");


router.get("/", getProyecto);
router.get("/:codigoProyecto", getProyectoPorCodigo);
router.get("/buscar/:tipoBusqueda/:valor", getProyectoBuscar);
router.post("/", insertProyecto);
router.put("/:codigoProyecto", updateProyecto);

module.exports = router;
