const db = require('../database/db');
const { DataTypes } = require('sequelize');



const User = db.define('users', {
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
    email: {
        allowNull: false,
        type: DataTypes.STRING
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.ENUM('active', 'deactivated'),
        defaultValue: 'active',
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('normal', 'admin'),
        defaultValue: 'normal',
        allowNull: false
    }

});

module.exports = User;