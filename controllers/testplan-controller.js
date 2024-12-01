const {
  testplanModel,
  
  } = require("../models");
  const { Op } = require("sequelize");
  const { httpErrorHandle } = require("../utils/handle-error");
  const PUBLIC_URL = process.env.PUBLIC_URL;
  


  const getTestPlan = async (req, res) => {
    try {
      const dataRegistro = await testplanModel.findAll({
        where: { 
          estatus: {
            [Op.or]: [1, 2]
          }
         },
      });
  
      const data = {
        estatus: 0,
        code: 200,
        mensaje: "",
        data: dataRegistro,
      };
  
      res.send(data);
    } catch (error) {
      httpErrorHandle(res, "ERROR_GET_TestPlanS", 400, 1);
    }
  };
  
  
  
  const getTestPlanPorCodigo = async (req, res) => {
    try {
      const {codigoTestPlan} = req.params;
      const dataRegistro = await testplanModel.findOne({
        where: { codigoTestPlan: codigoTestPlan },
      });
      if (!dataRegistro) {
        httpErrorHandle(res, "TestPlan_NO_EXISTE", 404);
        return;
      }
  
      const data = {
        estatus: 0,
        code: 200,
        mensaje: "",
        data: dataRegistro,
      };
  
      res.send(data);
    } catch (error) {
      httpErrorHandle(res, "ERROR_GET_TestPlan_CODIGO");
    }
  };
  
  
const getTestPlanBuscar = async (req, res) => {
  try {
    const { tipoBusqueda, valor } = req.params;
    let whereConfig = {};

    if (tipoBusqueda == 1){
      //ACTIVO
      whereConfig = { estatus: 1 };
    }
   
    const dataRegistro = await testplanModel.findAll({
      where: whereConfig,
    });
    if (!dataRegistro) {
      httpErrorHandle(res, "TestPlan_NO_EXISTE", 404);
      return;
    }

    const data = {
      estatus: 0,
      code: 200,
      mensaje: "",
      data: dataRegistro,
    };

    res.send(data);
  } catch (error) {
    httpErrorHandle(res, "ERROR_GET_TestPlan_BUSCAR");
  }
};
  
  const insertTestPlan = async (req, res) => {
    try {
      
      const body = req.body;
      
      const dataRegistro = await testplanModel.create(body);
  
      const data = {
        estatus: 0,
        code: 200,
        mensaje: "",
        data: dataRegistro,
      };
  
      res.send(data);
    } catch (error) {
      console.log(error);
      httpErrorHandle(res, "ERROR_INSERT_TestPlan");
    }
  };
  
  const updateTestPlan = async (req, res) => {
    try {
      const {codigoTestPlan} = req.params;
      const body = req.body;
      const dataRegistro = await testplanModel.update(body, {
        where: { codigoTestPlan: codigoTestPlan },
      });
  
      const data = {
        estatus: 0,
        code: 200,
        mensaje: "",
        data: dataRegistro,
      };
  
      res.send(data);
    } catch (error) {
      httpErrorHandle(res, "ERROR_UPDATE_TestPlan");
    }
  };
  
  
  module.exports = {
    getTestPlan,
    getTestPlanPorCodigo,
    getTestPlanBuscar,
    insertTestPlan,
    updateTestPlan
  };
  