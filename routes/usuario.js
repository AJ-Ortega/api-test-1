const express = require("express");

const router = express.Router();
const {
  getUsuario,
  getUsuarioPorCodigo,
  getUsuarioBuscar,
  insertUsuario,
  updateUsuario,
} = require("../controllers/usuario-controller");


router.get("/", getUsuario);
router.get("/:usuario", getUsuarioPorCodigo);
router.get("/buscar/:tipoBusqueda/:valor", getUsuarioBuscar);
router.post("/", insertUsuario);
router.put("/:codigoUsuario", updateUsuario);

module.exports = router;
