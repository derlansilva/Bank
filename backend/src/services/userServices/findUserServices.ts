import { Response } from "express";
import { prismaCLient } from "../../prisma";


export class FindUserServices{
    async find(key: string, response : Response){
        const user = await prismaCLient.user.findFirst({
            where:{
                cpf:key 
            }
        })

        if(user){
            return response.json(user)
        }else{
            return response.json({message: 'usuario não encontrado'})
        }
    }
}