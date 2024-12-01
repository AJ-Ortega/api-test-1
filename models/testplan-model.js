const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mssql");

const TestPlan = sequelize.define(
  "testplan",
  {
    codigoTestPlan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    codigoProyecto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombreTestPlan: {
      type: DataTypes.STRING,
    },
    criterioAceptacion: {
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

module.exports = TestPlan;
