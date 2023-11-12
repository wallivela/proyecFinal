import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class usuarios extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    correo_electronico: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "usuarios_correo_electronico_key"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    apellido: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cargo: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuarios',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usuarios_correo_electronico_key",
        unique: true,
        fields: [
          { name: "correo_electronico" },
        ]
      },
      {
        name: "usuarios_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
