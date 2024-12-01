const {
    proyectoModel,
  
  } = require("../models");
  const { Op } = require("sequelize");
  const { httpErrorHandle } = require("../utils/handle-error");
  const PUBLIC_URL = process.env.PUBLIC_URL;
  
  const getProyecto = async (req, res) => {
    try {
      const dataRegistro = await proyectoModel.findAll({
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
      httpErrorHandle(res, "ERROR_GET_ProyectoS", 400, 1);
    }
  };
  
  
  
  const getProyectoPorCodigo = async (req, res) => {
    try {
      const {codigoProyecto} = req.params;
      const dataRegistro = await proyectoModel.findOne({
        where: { codigoProyecto: codigoProyecto },
      });
      if (!dataRegistro) {
        httpErrorHandle(res, "Proyecto_NO_EXISTE", 404);
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
      httpErrorHandle(res, "ERROR_GET_Proyecto_CODIGO");
    }
  };
  

   
const getProyectoBuscar = async (req, res) => {
  try {
    const { tipoBusqueda, valor } = req.params;
    let whereConfig = {};

    if (tipoBusqueda == 1){
      //ACTIVO
      whereConfig = { estatus: 1 };
    }
   
    const dataRegistro = await proyectoModel.findAll({
      where: whereConfig,
    });
    if (!dataRegistro) {
      httpErrorHandle(res, "Proyecto_NO_EXISTE", 404);
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
    httpErrorHandle(res, "ERROR_GET_Proyecto_BUSCAR");
  }
};
  

  
  const insertProyecto = async (req, res) => {
    try {
      
      const body = req.body;
      
      console.log(body.fechaInicio);

      const dataRegistro = await proyectoModel.create(body);
  
      const data = {
        estatus: 0,
        code: 200,
        mensaje: "",
        data: dataRegistro,
      };
  
      res.send(data);
    } catch (error) {
      console.log(error);
      httpErrorHandle(res, "ERROR_INSERT_Proyecto");
    }
  };
  
  const updateProyecto = async (req, res) => {
    try {
      const {codigoProyecto} = req.params;
      const body = req.body;
      const dataRegistro = await proyectoModel.update(body, {
        where: { codigoProyecto: codigoProyecto },
      });
  
      const data = {
        estatus: 0,
        code: 200,
        mensaje: "",
        data: dataRegistro,
      };
  
      res.send(data);
    } catch (error) {
      httpErrorHandle(res, "ERROR_UPDATE_Proyecto");
    }
  };
  
  
  module.exports = {
    getProyecto,
    getProyectoPorCodigo,
    getProyectoBuscar,
    insertProyecto,
    updateProyecto
  };
  