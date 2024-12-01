const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mssql");

const TestCaseDocumento = sequelize.define(
  "testcaseDocumento",
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
    nombreArchivo: {
      type: DataTypes.STRING,
    },
    extension: {
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

module.exports = TestCaseDocumento;
