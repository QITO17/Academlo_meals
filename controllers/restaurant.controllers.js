const Restaurant = require("../models/restaurants")
const catchAsync = require("../utils/catchAsync")

exports.findAll = catchAsync( async (req, res, next) => {
    const restaurant = await Restaurant.findAll({
        where:{
            status:'active'
        }
    })

    return res.status(200).json({
        status:'Good',
        results: restaurant.length,
        losRestaurantes:restaurant
    })
})

exports.create = catchAsync( async (req, res, next) => {
    const { name, address, rating } = req.body

    await Restaurant.create({
        name, address, rating
    })

    return res.status(200).json({
        status:'Good',
        mesagge: 'Creado Exitosamente'
    })
})

exports.findOne = catchAsync( async (req, res, next) => {
    
    const { restaurant } = req

    const restaurante = await Restaurant.findOne({
        where:{
            status:'active',
            id: restaurant.id
        }
    })

    return res.status(200).json({
        status:'Good',
        restaurante,
    })
})

exports.update = catchAsync( async (req, res, next) => {
    const { restaurant } = req;

    const { name, address } = req.body;

    await restaurant.update(
        { name, address }      
    )
})

exports.delete = catchAsync( async (req, res, next) => {
    const { restaurant } = req;

    await restaurant.update(
        { status: 'deactivated' }      
    )
})
