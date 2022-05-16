import express from 'express'
import http from 'http'
import { routes } from './src/routes'
const app = express()

app.use(express.json())

const serverHttp = http.createServer(app)

app.use(routes)


export {serverHttp }
