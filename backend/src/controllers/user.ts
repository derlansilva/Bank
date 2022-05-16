import {Request , Response}from 'express'

import { CreateUserServices } from "../services/createUserServices";

type UseObject ={
    cpf: String,
    name: String,
    username: string
    email: string
    password: string
}

export class User {
    async save(request:Request , response: Response){

        const {cpf , name , username , email , password } = request.body

        const services = new CreateUserServices()
        const data ={
            cpf :cpf,
            name: name,
            username: username,
            email :email,
            password:password
        }
        const result = services.save(data)

        return response.json(result)
    }

    async update(){

    }

    async delete(){

    }
}