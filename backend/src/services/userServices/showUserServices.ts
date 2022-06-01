import { response } from "express"
import { prismaCLient } from "../../prisma"


export class ShowUserServices{
   async show(user_id:string) {
       const user = await prismaCLient.user.findFirst({
           where: {
               cpf: user_id
           },
           include:{
               deposit:{

               },
               pix:{

               }

           }
       })

       if(user){
           return user
       }
   }
}