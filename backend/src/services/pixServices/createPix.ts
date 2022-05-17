import {Response} from 'express'
import { prismaCLient } from "../../prisma";

type Data ={
    key:string
    id: string
    response : Response
}
export class CreatePixServices{
    async create(data: Data){
       
        const {key , id , response} = data
        let pix = await prismaCLient.pix.findFirst({
            where:{
                key: key
            }
        })

        if(pix){
            return response.json({message: "CHAVE PIX JA EXISTE"})
        }else{
            pix = await prismaCLient.pix.create({
                data: {
                    key:key,
                    user_id : id
                }
            })

            return response.json(pix)
        }
    }
}