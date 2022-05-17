import express from 'express'
import { Pix} from './controllers/pix'
import { User } from './controllers/user'
import { authenticte } from './middlewares/authenticate'

const routes = express.Router()

routes.post('/user/create' , new User().save )
routes.post('/user/login' , new User().login )
routes.get('/user/show' , authenticte , new User().show)

routes.post('/pix/create', authenticte , new Pix().create)


export{ routes}