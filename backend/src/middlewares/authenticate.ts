import {NextFunction, Request , Response} from 'express'
import {verify } from 'jsonwebtoken'

interface YpayLoad {
 sun: string
}
export function authenticte(request : Request , response :  Response , next: NextFunction){
    const authToken =  request.headers.authorization;

    if(!authToken){
        return response.status(401).json({
            message:" token invalid"
        })
    }
    const [,token ] = authToken.split(" ")

    try {

        const sub = verify(token , String(process.env.MY_SECRET) ) as YpayLoad
     
        next()

    } catch (error) {
        return response.status(401).json(
            {message: "token expired"}
        )
    }

}