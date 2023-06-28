const User = require('../models/users');
const Order = require('../models/orders');
const generateJWT = require('../utils/jwt');
const bcrypt = require('bcryptjs');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');
const app = require('../app');



exports.createUser = catchAsync(async (req, res, next) => {
    
        const { name, email, password } = req.body;

        const salt = await bcrypt.genSalt(12)
        const encryptePassword = await bcrypt.hash(password, salt)
        

        const user = await User.create({
            name: name.toLowerCase(),
            email:email.toLowerCase(),
            password:encryptePassword,

        })


        if(user){
            return res.status(201).json({
                status: 'Todo Correcto Creado',
                mesagge: 'Tamos Ardiendo En El BackEnd 😼😼',
                user:{
                    id: user.id,
                    name: user.name,
                    email: user.email,
                },
            })
        }

        return res.status(404).json({
            status: 'No se ah creado asegurese de enviar toda la info',
            mesagge: 'No Tamos Ardiendo En El BackEnd 😒'
        })
})

exports.createLogin = catchAsync(async (req, res, next) => {
   
        const { email, password } = req.body;

        const user = await User.findOne({       
            where:{
                email: email.toLowerCase(),
                status:'active',
            }
        })

        
        if(!user){
            return new AppError('El usuario no fue encontrado', 404)
        }

        const token = await generateJWT(user.id);


        if(user){
            return res.status(201).json({
                status: 'Logueado',
                mesagge: 'Tamos Ardiendo En El BackEnd 😼😼',  
                token, 
            })
        }
})

exports.updateUser = catchAsync(async (req, res, next) => {

        const { user } = req;
        const { name, email} = req.body;
        const { id } = req.params
    

            user.update({ name, email });
            return res.status(200).json({
                message: `Usuario Actualizado Con Exito`,
                mesagge2: '😎🐱‍🏍🐱‍🐉 Att Arley Hurtado',
                user
            });   
});

exports.deleteUser = catchAsync(async (req, res, next) => {
   
    const { user } = req;


        user.update({ status: 'deactivated' });
        return res.status(200).json({
            message: `Usuario Eliminado Con Exito`,
            mesagge2: '😎🐱‍🏍🐱‍🐉 Att Arley Hurtado',
            user
        });   
   
})

exports.allOrdersUser = catchAsync(async (req, res, next) => {
  
        const { user } = req

        const orders = await Order.findAll({
            userId: user.id
        })

        if(orders){
            return res.status(200).json({
                orders
            });
        }

        return res.status(404).json({
            message: `No se han encontrado ordenes del usuario ${user.id}`,
        });  

})