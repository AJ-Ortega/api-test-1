const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mssql");

const Usuario = sequelize.define(
  "usuario",
  {
    codigoUsuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    codigoEmpresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    usuario: {
      type: DataTypes.STRING,
    },
    clave: {
      type: DataTypes.STRING,
    },
    tipoTecnico: {
      type: DataTypes.INTEGER,
    },
    estatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    schema: "ad",
    timestamps: true,
    freezeTableName: true,
  }
);

DataTypes.DATE.prototype._stringify = function _stringify(date, options) {
  date = this._applyTimezone(date, options);
  return date.format("YYYY-MM-DD HH:mm:ss.SSS");
};

module.exports = Usuario;
