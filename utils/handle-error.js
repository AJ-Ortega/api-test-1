const httpErrorHandle = (
  res,
  mensaje = "Ocurrió un error",
  code = 403,
  estatus = 1
) => {
  res.status(code);
  res.send({
    estatus,
    code,
    mensaje,
    data: null,
  });
};

module.exports = { httpErrorHandle };
