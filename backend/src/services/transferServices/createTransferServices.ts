import {Response} from 'express'

import { prismaCLient } from "../../prisma";

type Data={
    key:string
    user: string,
    value: number
    response: Response
}

export class CreateTrasferServices{
    async create(data:Data){
        const {key , user , value ,response} =data

        
        let pix = await prismaCLient.pix.findFirst({
            where:{
                key: key
            }
        })
        if(pix){
            let transfer = await prismaCLient.transfer.create({
                data:{
                    value: value,
                    date: new Date(),
                    user_id: user,
                    key: key
                }
            })
        }else{
            console.log('pix não cadastrado')
        }
        
    }
}