
import {Request , Response} from 'express'
import { CreatePixServices } from '../services/pixServices/createPix'

export class Pix{
    async  create(request : Request , response : Response) {
        const {key} = request.body
        const id  = String(request.headers.id)
        const service = new CreatePixServices() 

        let data ={
            key: key,
            id : id,
            response : response
        }
        const result = await service.create(data)
    }
}