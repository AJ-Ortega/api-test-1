const express = require("express");

const router = express.Router();
const {
  getTestCaseDefecto,
  getTestCaseDefectoPorCodigo,
  insertTestCaseDefecto,
  updateTestCaseDefecto,
} = require("../controllers/testcasedefecto-controller");

router.get("/", getTestCaseDefecto);
router.get("/:codigoTestCaseDefecto", getTestCaseDefectoPorCodigo);
router.post("/", insertTestCaseDefecto);
router.put("/:codigoTestCaseDefecto", updateTestCaseDefecto);

module.exports = router;
