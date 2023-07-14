const { Router } = require("express");
const { createUserController, loginUserController, userLoginGetController, userRegisterGetController } = require("../controllers/userController");
const authRouter = Router();


authRouter.get('/login', userLoginGetController)
authRouter.get('/register', userRegisterGetController)

authRouter.post('/register', createUserController)
authRouter.post('/login', loginUserController)

module.exports = authRouter