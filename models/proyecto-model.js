const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mssql");

const Proyecto = sequelize.define(
  "proyecto",
  {
    codigoProyecto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    codigoEmpresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombreProyecto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codigoUsuarioAnalista: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    codigoUsuarioSupervisor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fechaInicio: {
      type: DataTypes.DATE,
    },
    fechaFin: {
      type: DataTypes.DATE,
    },

    hitoUno: {
      type: DataTypes.STRING,
    },
    fechaHitoUno: {
      type: DataTypes.DATE,
    },

    hitoDos: {
      type: DataTypes.STRING,
    },
    fechaHitoDos: {
      type: DataTypes.DATE,
    },

    hitoTres: {
      type: DataTypes.STRING,
    },
    fechaHitoTres: {
      type: DataTypes.DATE,
    },

    hitoCuatro: {
      type: DataTypes.STRING,
    },
    fechaHitoCuatro: {
      type: DataTypes.DATE,
    },

    estatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    schema: "test",
    timestamps: true,
    freezeTableName: true,
  }
);

DataTypes.DATE.prototype._stringify = function _stringify(date, options) {
  date = this._applyTimezone(date, options);
  return date.format("YYYY-MM-DD HH:mm:ss.SSS");
};

module.exports = Proyecto;
