const db = require('../database/db');
const { DataTypes } = require('sequelize');



const Order = db.define('orders', {
    id: {
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    mealId: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    userId: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    totalPrice: {
        allowNull: false,
        type: DataTypes.DOUBLE
    },
    quantity: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.ENUM('active', 'cancelled', 'completed'),
        defaultValue: 'active',
        allowNull: false
    }

});

module.exports = Order;