const {
  testcaseDefectoModel,
  
  } = require("../models");
  const { Op } = require("sequelize");
  const { httpErrorHandle } = require("../utils/handle-error");
  const PUBLIC_URL = process.env.PUBLIC_URL;
  


  const getTestCaseDefecto = async (req, res) => {
    try {
      const dataRegistro = await testcaseDefectoModel.findAll();
  
      const data = {
        estatus: 0,
        code: 200,
        mensaje: "",
        data: dataRegistro,
      };
  
      res.send(data);
    } catch (error) {
      httpErrorHandle(res, "ERROR_GET_TestCaseDefecto", 400, 1);
    }
  };
  
  
  
  const getTestCaseDefectoPorCodigo = async (req, res) => {
    try {
      const {codigoTestCaseDefecto} = req.params;
      const dataRegistro = await testcaseDefectoModel.findOne({
        where: { codigoTestCaseDefecto: codigoTestCaseDefecto },
      });
      if (!dataRegistro) {
        httpErrorHandle(res, "TestCaseDefecto_NO_EXISTE", 404);
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
      httpErrorHandle(res, "ERROR_GET_TestCaseDefecto_CODIGO");
    }
  };
  
  
  
  const insertTestCaseDefecto = async (req, res) => {
    try {
      
      const body = req.body;
      
      const dataRegistro = await testcaseDefectoModel.create(body);
  
      const data = {
        estatus: 0,
        code: 200,
        mensaje: "",
        data: dataRegistro,
      };
  
      res.send(data);
    } catch (error) {
      console.log(error);
      httpErrorHandle(res, "ERROR_INSERT_TestCaseDefecto");
    }
  };
  
  const updateTestCaseDefecto = async (req, res) => {
    try {
      const {codigoTestCaseDefecto} = req.params;
      const body = req.body;
      const dataRegistro = await testcaseDefectoModel.update(body, {
        where: { codigoTestCaseDefecto: codigoTestCaseDefecto },
      });
  
      const data = {
        estatus: 0,
        code: 200,
        mensaje: "",
        data: dataRegistro,
      };
  
      res.send(data);
    } catch (error) {
      httpErrorHandle(res, "ERROR_UPDATE_TestCaseDefecto");
    }
  };
  
  
  module.exports = {
    getTestCaseDefecto,
    getTestCaseDefectoPorCodigo,
    insertTestCaseDefecto,
    updateTestCaseDefecto
  };
  