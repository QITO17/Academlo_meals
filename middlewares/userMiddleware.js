const catchAsync = require('../utils/catchAsync');
const User = require('../models/users');
const AppError = require('../utils/AppError');

exports.exisUser = catchAsync(async(req, res, next) => {
  const { id } = req.params

    const user = await User({
        where:{
            status: 'active',
            id,
        }
    })

    if(!user){
        return next(new AppError(`No se encontro el usuario con el id${id}`, 404))
    }
    req.user = user;
  next();
});