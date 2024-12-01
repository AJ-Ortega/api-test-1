const {
    empresaModel,
  
  } = require("../models");
  const { Op } = require("sequelize");
  const { httpErrorHandle } = require("../utils/handle-error");
  const PUBLIC_URL = process.env.PUBLIC_URL;
  


  const getEmpresa = async (req, res) => {
    try {
      const dataRegistro = await empresaModel.findAll({
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
      httpErrorHandle(res, "ERROR_GET_EmpresaS", 400, 1);
    }
  };
  
  
  
  const getEmpresaPorCodigo = async (req, res) => {
    try {
      const {codigoEmpresa} = req.params;
      const dataRegistro = await empresaModel.findOne({
        where: { codigoEmpresa: codigoEmpresa },
      });
      if (!dataRegistro) {
        httpErrorHandle(res, "Empresa_NO_EXISTE", 404);
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
      httpErrorHandle(res, "ERROR_GET_Empresa_CODIGO");
    }
  };
  
  
  
  const insertEmpresa = async (req, res) => {
    try {
      
      const body = req.body;
      
      const dataRegistro = await empresaModel.create(body);
  
      const data = {
        estatus: 0,
        code: 200,
        mensaje: "",
        data: dataRegistro,
      };
  
      res.send(data);
    } catch (error) {
      console.log(error);
      httpErrorHandle(res, "ERROR_INSERT_Empresa");
    }
  };
  
  const updateEmpresa = async (req, res) => {
    try {
      const {codigoEmpresa} = req.params;
      const body = req.body;
      const dataRegistro = await empresaModel.update(body, {
        where: { codigoEmpresa: codigoEmpresa },
      });
  
      const data = {
        estatus: 0,
        code: 200,
        mensaje: "",
        data: dataRegistro,
      };
  
      res.send(data);
    } catch (error) {
      httpErrorHandle(res, "ERROR_UPDATE_Empresa");
    }
  };
  
  
  module.exports = {
    getEmpresa,
    getEmpresaPorCodigo,
    insertEmpresa,
    updateEmpresa
  };
  