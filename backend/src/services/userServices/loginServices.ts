import { compare } from 'bcrypt'
import {response, Response} from 'express'
import { sign } from 'jsonwebtoken'
import { prismaCLient } from '../../prisma'
type DataÛser ={
    cpf: string,
    password: string,
    response: Response
}

export class LoginServices{
    async login(data:DataÛser){
        let {cpf, password , response} = data

        let user  = await prismaCLient.user.findFirst({
            where:{
                cpf: cpf
            }
        })

        if(!cpf || !password){
            return response.json({message: "CPF E SENHA OBRIGÁTORIO"})
        }
        if(!password){
            return response.json({message: "OBRIGATORIO PREENCHER A SENHA"})
        }

        if(!user){
            return response.json({message: 'USUÁRIO NÃO CADASTRADO'})
        }else{
            let isPasswordMatch = await compare(password , user.password)

            if(isPasswordMatch){
                const id = user.cpf
                const token  = sign({id} , String(process.env.MY_SECRET) , {
                    expiresIn : '1d'
                })

                return response.json({user , token })
            }else{
                return response.json({message: "senha incorreta"})
            }
        }
    }
}