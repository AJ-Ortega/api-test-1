const express = require("express");

const router = express.Router();
const {
  getEmpresa,
  getEmpresaPorCodigo,
  insertEmpresa,
  updateEmpresa,
} = require("../controllers/empresa-controller");



router.get("/", getEmpresa);
router.get("/:codigoEmpresa", getEmpresaPorCodigo);
router.post("/", insertEmpresa);
router.put("/:codigoEmpresa", updateEmpresa);

module.exports = router;
