const db = require('../database/db');
const { DataTypes } = require('sequelize');



const Meal = db.define('meals', {
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
    price: {
        allowNull: false,
        type: DataTypes.DOUBLE
    },
    MealsId: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.ENUM('active', 'deactivated'),
        defaultValue: 'active',
        allowNull: false
    }

});

module.exports = Meal;