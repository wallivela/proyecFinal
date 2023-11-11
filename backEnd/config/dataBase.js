import {Sequelize} from 'sequelize';

const conexion = new Sequelize(
    'compas',
    'postgres',
    '8742',
    {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres',

    }
);

export default conexion;