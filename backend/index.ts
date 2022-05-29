import express from 'express'
import http from 'http'
import cors from 'cors'
import { routes } from './src/routes'
const app = express()

app.use(express.json())
app.use(cors())
const serverHttp = http.createServer(app)

app.use(routes)


export {serverHttp }
