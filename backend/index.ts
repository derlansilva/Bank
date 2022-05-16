import express from 'express'
import http from 'http'
const app = express()

app.use(express.json())

const serverHttp = http.createServer(app)



export {serverHttp }
