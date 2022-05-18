import {Response} from 'express'
import { prismaCLient } from '../../prisma'

type Data= {
    id : string
    value: string
    response: Response
}
export class CreateDepositServices{
   async create(data : Data){
       const {id , value , response} =data
        let deposit=  await prismaCLient.deposit.findFirst({
            where:{
                id: id
            }
        })

        if(!deposit){
            deposit  = await prismaCLient.deposit.create({
                data: {
                    id: id,
                    value: parseFloat(value),
                    user_id:id
                }
            })

            return response.json(deposit)
        }else{
            console.log('então eu vou atualizar o deposit')
            deposit = await prismaCLient.deposit.update({
                where:{
                    id: id
                },
                data: {
                    value: deposit.value + parseFloat(value)
                }
            })

            return response.json(deposit)
        }
   }
}