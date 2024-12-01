const express = require("express");

const router = express.Router();
const {
  getTestPlan,
  getTestPlanPorCodigo,
  getTestPlanBuscar,
  insertTestPlan,
  updateTestPlan,
} = require("../controllers/testplan-controller");


router.get("/", getTestPlan);
router.get("/:codigoTestPlan", getTestPlanPorCodigo);
router.get("/buscar/:tipoBusqueda/:valor", getTestPlanBuscar);
router.post("/", insertTestPlan);
router.put("/:codigoTestPlan", updateTestPlan);

module.exports = router;
