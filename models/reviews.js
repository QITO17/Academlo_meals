const db = require('../database/db');
const { DataTypes } = require('sequelize');



const Review = db.define('reviews', {
    id: {
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    comment: {
        allowNull: false,
        type: DataTypes.STRING
    },
    restaurantId: {
        allowNull: false,
        type: DataTypes.INTEGER
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

module.exports = Review;