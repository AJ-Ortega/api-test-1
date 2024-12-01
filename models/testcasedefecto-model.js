const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mssql");

const TestCaseDefecto = sequelize.define(
  "testcaseDefecto",
  {
    codigoTestCaseDocumento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    codigoTestCase: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombreDefecto: {
      type: DataTypes.STRING,
    },

    codigoUsuarioAnalista: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    codigoUsuarioSupervisor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    datoPrueba: {
      type: DataTypes.STRING,
    },
    pasoPrueba: {
      type: DataTypes.STRING,
    },
    resultadoEsperado: {
      type: DataTypes.STRING,
    },
    resultadoObtenido: {
      type: DataTypes.STRING,
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

module.exports = TestCaseDefecto;
