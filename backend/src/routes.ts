import express from 'express'
import { Deposit } from './controllers/deposit'
import { Pix} from './controllers/pix'
import { User } from './controllers/user'
import { authenticate } from './middlewares/authenticate'

const routes = express.Router()

routes.post('/user/create' , new User().save )
routes.post('/user/login' , new User().login )
routes.get('/user/show' , authenticate , new User().show)
routes.get('/user/find/:id'  , new User().find)

routes.post('/pix/create', authenticate , new Pix().create)

routes.post('/deposit/create', authenticate , new Deposit().create)

export{ routes}