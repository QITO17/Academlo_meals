const express = require("express");
const userControllers = require('../controllers/usersControllers')
const router = express.Router();

const authMiddleware = require('../middlewares/auth.middleware');
const userMiddleware = require('../middlewares/userMiddleware');
const validationMiddleware = require('../middlewares/validation.middleware')

router.route("/signup").post(validationMiddleware.createUser, userControllers.createUser); 
router.route("/login").post(validationMiddleware.createLogin, userControllers.createLogin); 

router.use(authMiddleware.protect)

router.use("/:id", userMiddleware.exisUser).route('/:id').patch( authMiddleware.protectAccountOwner, userControllers.updateUser).delete( authMiddleware.protectAccountOwner,userControllers.deleteUser)

router.route('/orders').get(userControllers.allOrdersUser)
router.route('/orders/:id').get()



module.exports = router;
