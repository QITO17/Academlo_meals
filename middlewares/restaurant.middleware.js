const catchAsync = require('../utils/catchAsync');
const Restaurant = require('../models/restaurants');
const AppError = require('../utils/AppError');

exports.existRestaurant = catchAsync(async(req, res, next) => {
  
    const { id } = req;

    const restaurant = await Restaurant.findOne({
        where:{
            status:'active',
            id,
        }
    });

    if(!restaurant){
        return next(new AppError(`No se encontro el restaurante con el id ${id}`, 404))
    }

    req.restaurant = restaurant;
  next();
});