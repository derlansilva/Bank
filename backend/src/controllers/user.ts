import {Request , Response} from 'express'

import { CreateUserServices } from "../services/userServices/createUserServices";
import { FindUserServices } from '../services/userServices/findUserServices';
import { LoginServices } from '../services/userServices/loginServices';
import { ShowUserServices } from '../services/userServices/showUserServices';


export class User {
    
    async save(request:Request , response: Response){

        const {cpf , name , username , email , password } = request.body

        const services = new CreateUserServices()
        const data ={cpf :cpf,name: name,username: username,email :email,password:password,response : response}
       
        const result = services.save(data)

        return result
    }
    async login(request: Request , response : Response){

        const { cpf , password } = request.body

        console.log(cpf , password)
        
        let data ={
            cpf: cpf,
            password : password,
            response : response
        }

        let service = new LoginServices()

        let result = service.login(data)
    }
   async show(request : Request , response : Response){

        console.log(request)
       const id = request.headers.id

       console.log('no user' , id)
       const user_id = String(id)

       const service = new ShowUserServices()

       const show =await service.show(user_id)
       return response.json(show)
   }
   async find(request :Request , response: Response){
       const {id} = request.params

       const service = new FindUserServices()
       const result = service.find(id , response)
   }

    async update(){

    }

    async delete(){

    }
}