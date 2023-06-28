const User = require('./users')
const Order = require('./orders')
const Review = require('./reviews')
const Restaurant = require('./restaurants')
const Meal = require('./meals')



const initModel = () => {
    User.hasMany(Order);
    Order.belongsTo(User);

    User.hasMany(Review);
    Review.belongsTo(User);

    Restaurant.hasMany(Review);
    Review.belongsTo(Restaurant);

    Restaurant.hasMany(Meal);
    Meal.belongsTo(Restaurant);

    Meal.hasOne(Order);
    Order.belongsTo(Meal);

}

module.exports = initModel