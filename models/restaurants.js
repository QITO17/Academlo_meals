const db = require('../database/db');
const { DataTypes } = require('sequelize');



const Restaurant = db.define('restaurant', {
    id: {
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    address: {
        allowNull: false,
        type: DataTypes.STRING
    },
    rating: {
        allowNull: false,
        type: DataTypes.DOUBLE
    },
    status: {
        type: DataTypes.ENUM('active', 'deactivated'),
        defaultValue: 'active',
        allowNull: false
    }

});

module.exports = Restaurant;