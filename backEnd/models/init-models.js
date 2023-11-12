import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _datos from  "./datos.js";
import _usuarios from  "./usuarios.js";

export default function initModels(sequelize) {
  const datos = _datos.init(sequelize, DataTypes);
  const usuarios = _usuarios.init(sequelize, DataTypes);


  return {
    datos,
    usuarios,
  };
}
