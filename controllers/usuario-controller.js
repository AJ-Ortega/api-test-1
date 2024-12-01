const { usuarioModel } = require("../models");
const { Op, where } = require("sequelize");
const { httpErrorHandle } = require("../utils/handle-error");
const PUBLIC_URL = process.env.PUBLIC_URL;

const getUsuario = async (req, res) => {
  try {
    const dataRegistro = await usuarioModel.findAll({
      where: {
        estatus: {
          [Op.or]: [1, 2],
        },
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
    httpErrorHandle(res, "ERROR_GET_UsuarioS", 400, 1);
  }
};

const getUsuarioPorCodigo = async (req, res) => {
  try {
    const { usuario } = req.params;
    const dataRegistro = await usuarioModel.findOne({
      where: { usuario: usuario },
    });
    if (!dataRegistro) {
      httpErrorHandle(res, "Usuario_NO_EXISTE", 404);
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
    httpErrorHandle(res, "ERROR_GET_Usuario_CODIGO");
  }
};

const getUsuarioBuscar = async (req, res) => {
  try {
    const { tipoBusqueda, valor } = req.params;

    console.log(tipoBusqueda);
    console.log(valor);

    let whereConfig = {};

    if (tipoBusqueda == 1){
      console.log("ACTIVO")
      //ACTIVO
      whereConfig = { estatus: 1 };
    }
    else if (tipoBusqueda == 2) {
      console.log("TIPO TÉCNICO")
      //TIPO TÉCNICO
      whereConfig = {
        [Op.and]: [{ estatus: 1 }, { tipoTecnico: valor }],
      };
    }

    console.log(whereConfig);

    const dataRegistro = await usuarioModel.findAll({
      where: whereConfig,
    });
    if (!dataRegistro) {
      httpErrorHandle(res, "Usuario_NO_EXISTE", 404);
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
    httpErrorHandle(res, "ERROR_GET_Usuario_CODIGO");
  }
};

const insertUsuario = async (req, res) => {
  try {
    const body = req.body;

    const dataRegistro = await usuarioModel.create(body);

    const data = {
      estatus: 0,
      code: 200,
      mensaje: "",
      data: dataRegistro,
    };

    res.send(data);
  } catch (error) {
    console.log(error);
    httpErrorHandle(res, "ERROR_INSERT_Usuario");
  }
};

const updateUsuario = async (req, res) => {
  try {
    const { codigoUsuario } = req.params;
    const body = req.body;
    const dataRegistro = await usuarioModel.update(body, {
      where: { codigoUsuario: codigoUsuario },
    });

    const data = {
      estatus: 0,
      code: 200,
      mensaje: "",
      data: dataRegistro,
    };

    res.send(data);
  } catch (error) {
    httpErrorHandle(res, "ERROR_UPDATE_Usuario");
  }
};

module.exports = {
  getUsuario,
  getUsuarioPorCodigo,
  getUsuarioBuscar,
  insertUsuario,
  updateUsuario,
};
