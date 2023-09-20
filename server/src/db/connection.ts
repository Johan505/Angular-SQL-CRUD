import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('almacen', 'postgres', 'jmav1234',{
    host: 'localhost',
    dialect: 'postgres'
});

export default sequelize;