const express = require("express");

const router = express.Router();
const {
  getTestCase,
  getTestCasePorCodigo,
  insertTestCase,
  updateTestCase,
} = require("../controllers/testcase-controller");


router.get("/", getTestCase);
router.get("/:codigoTestCase", getTestCasePorCodigo);
router.post("/", insertTestCase);
router.put("/:codigoTestCase", updateTestCase);

module.exports = router;
