const {
  testcaseModel,
  
  } = require("../models");
  const { Op } = require("sequelize");
  const { httpErrorHandle } = require("../utils/handle-error");
  const PUBLIC_URL = process.env.PUBLIC_URL;
  


  const getTestCase = async (req, res) => {
    try {
      const dataRegistro = await testcaseModel.findAll();
  
      const data = {
        estatus: 0,
        code: 200,
        mensaje: "",
        data: dataRegistro,
      };
  
      res.send(data);
    } catch (error) {
      httpErrorHandle(res, "ERROR_GET_TestCaseS", 400, 1);
    }
  };
  
  
  
  const getTestCasePorCodigo = async (req, res) => {
    try {
      const {codigoTestCase} = req.params;
      const dataRegistro = await testcaseModel.findOne({
        where: { codigoTestCase: codigoTestCase },
      });
      if (!dataRegistro) {
        httpErrorHandle(res, "TestCase_NO_EXISTE", 404);
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
      httpErrorHandle(res, "ERROR_GET_TestCase_CODIGO");
    }
  };
  
  
  
  const insertTestCase = async (req, res) => {
    try {
      
      const body = req.body;
      
      const dataRegistro = await testcaseModel.create(body);
  
      const data = {
        estatus: 0,
        code: 200,
        mensaje: "",
        data: dataRegistro,
      };
  
      res.send(data);
    } catch (error) {
      console.log(error);
      httpErrorHandle(res, "ERROR_INSERT_TestCase");
    }
  };
  
  const updateTestCase = async (req, res) => {
    try {
      const {codigoTestCase} = req.params;
      const body = req.body;
      const dataRegistro = await testcaseModel.update(body, {
        where: { codigoTestCase: codigoTestCase },
      });
  
      const data = {
        estatus: 0,
        code: 200,
        mensaje: "",
        data: dataRegistro,
      };
  
      res.send(data);
    } catch (error) {
      httpErrorHandle(res, "ERROR_UPDATE_TestCase");
    }
  };
  
  
  module.exports = {
    getTestCase,
    getTestCasePorCodigo,
    insertTestCase,
    updateTestCase
  };
  