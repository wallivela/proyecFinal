import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class datos extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    zona: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    apellido1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    apellido2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nombre1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nombre2: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'datos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "datos_pkey",
        unique: true,
        fields: [
          { name: "zona" },
        ]
      },
    ]
  });
  }
}
