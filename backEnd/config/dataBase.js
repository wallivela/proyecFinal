import {Sequelize} from 'sequelize';

const conexion = new Sequelize(
    'railway',
    'postgres',
    '6e2BE*b6BE3BffbA*-fAe1AFD1BGa5B6',
    {
        host: 'viaduct.proxy.rlwy.net',
        port: 21584,
        dialect: 'postgres',

    }
);

export default conexion; 