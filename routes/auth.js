import Router from 'express'
import User from '../models/User.js'
import read from '../controllers/auth/read.js'
import registerController from '../controllers/auth/registerController.js'
import generateToken from '../middlewares/generateToken.js'
import loginController from '../controllers/auth/loginController.js'


let auth_router = Router()

auth_router.get('/', read)

//REGISTER
auth_router.post('/register', registerController)

//LOGIN
auth_router.post('/login', generateToken, loginController)


export default auth_router