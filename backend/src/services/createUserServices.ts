import {hash} from 'bcrypt'

import { prismaCLient } from "../prisma"
import { checkCpf } from "../utils/checkCpf"

type UseObject ={
    cpf: string,
    name: string,
    username: string
    email: string
    password: string
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

                return user
            }

        }
   }
}