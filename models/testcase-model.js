const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mssql");

const TestCase = sequelize.define(
  "testcase",
  {
    codigoTestCase: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    codigoTestPlan: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombreTestCase: {
      type: DataTypes.STRING,
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

module.exports = TestCase;
