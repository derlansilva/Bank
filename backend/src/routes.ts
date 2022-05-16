import express from 'express'
import { User } from './controllers/user'

const routes = express.Router()

routes.post('/user/create' , new User().save )
routes.post('/user/login' , new User().login )


export{ routes}