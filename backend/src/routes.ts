import express from 'express'
import { User } from './controllers/user'

const routes = express.Router()

routes.post('/user/create' , new User().save )


export{ routes}