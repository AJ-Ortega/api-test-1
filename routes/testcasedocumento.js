const express = require("express");

const router = express.Router();
const {
  getTestCaseDocumento,
  getTestCaseDocumentoPorCodigo,
  insertTestCaseDocumento,
  updateTestCaseDocumento,
} = require("../controllers/testcasedocumento-controller");


router.get("/", getTestCaseDocumento);
router.get("/:codigoTestCaseDocumento", getTestCaseDocumentoPorCodigo);
router.post("/", insertTestCaseDocumento);
router.put("/:codigoTestCaseDocumento", updateTestCaseDocumento);

module.exports = router;
