const {
  testcaseDocumentoModel,
  
  } = require("../models");
  const { Op } = require("sequelize");
  const { httpErrorHandle } = require("../utils/handle-error");
  const PUBLIC_URL = process.env.PUBLIC_URL;
  


  const getTestCaseDocumento = async (req, res) => {
    try {
      const dataRegistro = await testcaseDocumentoModel.findAll();
  
      const data = {
        estatus: 0,
        code: 200,
        mensaje: "",
        data: dataRegistro,
      };
  
      res.send(data);
    } catch (error) {
      httpErrorHandle(res, "ERROR_GET_TestCaseDocumento", 400, 1);
    }
  };
  
  
  
  const getTestCaseDocumentoPorCodigo = async (req, res) => {
    try {
      const {codigoTestCaseDocumento} = req.params;
      const dataRegistro = await testcaseDocumentoModel.findOne({
        where: { codigoTestCaseDocumento: codigoTestCaseDocumento },
      });
      if (!dataRegistro) {
        httpErrorHandle(res, "TestCaseDocumento_NO_EXISTE", 404);
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
      httpErrorHandle(res, "ERROR_GET_TestCaseDocumento_CODIGO");
    }
  };
  
  
  
  const insertTestCaseDocumento = async (req, res) => {
    try {
      
      const body = req.body;
      
      const dataRegistro = await testcaseDocumentoModel.create(body);
  
      const data = {
        estatus: 0,
        code: 200,
        mensaje: "",
        data: dataRegistro,
      };
  
      res.send(data);
    } catch (error) {
      console.log(error);
      httpErrorHandle(res, "ERROR_INSERT_TestCaseDocumento");
    }
  };
  
  const updateTestCaseDocumento = async (req, res) => {
    try {
      const {codigoTestCaseDocumento} = req.params;
      const body = req.body;
      const dataRegistro = await testcaseDocumentoModel.update(body, {
        where: { codigoTestCaseDocumento: codigoTestCaseDocumento },
      });
  
      const data = {
        estatus: 0,
        code: 200,
        mensaje: "",
        data: dataRegistro,
      };
  
      res.send(data);
    } catch (error) {
      httpErrorHandle(res, "ERROR_UPDATE_TestCaseDocumento");
    }
  };
  

  
const insertImagen = async (req, res) => {
  try {
    const { body, file } = req;
    const { codigoBlog } = req.params;
    const fileDat = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`,
    };


    const dataBlog = await blogModel.update(
      {
        imagenMiniatura: `${PUBLIC_URL}/${file.filename}`,
      },
      {
        where: { codigoBlog: codigoBlog },
      }
    );

    const data = {
      estatus: 0,
      code: 200,
      mensaje: "",
      data: dataBlog,
    };

    res.send(data);
  } catch (error) {
    httpErrorHandle(res, "ERROR_INSERT_Blog");
  }
};
  
  module.exports = {
    getTestCaseDocumento,
    getTestCaseDocumentoPorCodigo,
    insertTestCaseDocumento,
    updateTestCaseDocumento,
    insertImagen
  };
  