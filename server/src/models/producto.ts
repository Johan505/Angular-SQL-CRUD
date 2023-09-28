import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Producto = db.define('productos',{
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.STRING
    },
    stock: {
        type: DataTypes.STRING
    },
}, {
    createdAt: false,
    updatedAt:false
});

export default Producto;