const { validationResult, body } = require('express-validator');

const validateFields = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      errors: errors.mapped(),
    });
  }

  next();
};

exports.createLogin = [
  body('email')
    .notEmpty()
    .withMessage('El Email Esta Nulo')
    .isEmail()
    .withMessage('Formato invalido'),
  body('password')
    .notEmpty()
    .withMessage('Contraseña esta como nula')
    .isLength({ min: 3 })
    .withMessage('Debe tener almenos 3 caracteres')
    .matches(/\d/)
    .withMessage('Debe tener almenos un numero')
    .matches(/[A-Z]/)
    .withMessage('La contraseña debe tener almenos una mayuscula'),

  validateFields,
];

exports.createUser = [
  body('name').notEmpty().withMessage('El Nombre Esta Nulo'),
  body('email')
    .notEmpty()
    .withMessage('El email Esta Nulo')
    .isEmail()
    .withMessage('Formato invalido'),
  body('password')
    .notEmpty()
    .withMessage('Contraseña esta como nula')
    .isLength({ min: 3 })
    .withMessage('Debe tener almenos 3 caracteres')
    .matches(/\d/)
    .withMessage('Debe tener almenos un numero')
    .matches(/[A-Z]/)
    .withMessage('La contraseña debe tener almenos una mayuscula'),

  validateFields,
];
