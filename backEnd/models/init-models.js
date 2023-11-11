import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _datos from  "./datos.js";

export default function initModels(sequelize) {
  const datos = _datos.init(sequelize, DataTypes);


  return {
    datos,
  };
}
