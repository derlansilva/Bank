import {hash} from 'bcrypt'
import {Response} from 'express'
import { prismaCLient } from "../../prisma"
import { checkCpf } from "../../utils/checkCpf"

type UseObject ={
    cpf: string,
    name: string,
    username: string
    email: string
    password: string,
    response: Response
}

export class CreateUserServices{
   async save(data:UseObject){
       let check = checkCpf(data.cpf)
        if(check){
            let user = await  prismaCLient.user.findFirst({
                where:{
                    cpf : data.cpf
                }
            })

            if(!user){
                let password = await hash(data.password , 8)
                
                user = await prismaCLient.user.create({
                    data:{
                        cpf: data.cpf,
                        name: data.name,
                        username: data.username,
                        email: data.email,
                        password: password
                    }
                })

                return data.response.json(user)
            }else{
                return data.response.json(user)
            }
        }
   }
}