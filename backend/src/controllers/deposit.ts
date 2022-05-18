import {Request , Response} from 'express'
import { CreateDepositServices } from '../services/depositServices/createDeposit'

export class Deposit {
    async create(request: Request , response: Response){
        const {value} =request.body
        const user_id = String(request.headers.id)

        const service = new CreateDepositServices()
        let data= { id: user_id , value: value , response: response}
        const result = service.create(data)
    }
    async update(){
        
    }
}