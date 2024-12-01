const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mssql");

const Empresa = sequelize.define(
  "empresa",
  {
    codigoEmpresa: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
 
    nombreEmpresa: {
      type: DataTypes.STRING,
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

module.exports = Empresa;
