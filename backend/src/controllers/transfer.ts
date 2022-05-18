import {Request , Response} from 'express'
import { CreateTrasferServices } from '../services/transferServices/createTransferServices'

export class Transfer{
    async create(request : Request , response : Response){
        const { key ,value} = request.body
        const id =String(request.headers.id)

        const service = new CreateTrasferServices()
        
        let data ={
            key:key,
            user: id,
            value : value,
            response: response
        }
        const result = await service.create(data)
    }
}