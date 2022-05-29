import React , {createContext , ReactNode, useEffect, useState} from "react";
import {    View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from "../services/api";
import SignIn from "../services/auth";

interface AuthContextData{
    signed: boolean;
    loading: boolean
    user: object |null;
    Login(cpf: string , password: string):Promise<void>;
    SignOut():Promise<void>
}
type AuthProvider={
    children  : ReactNode
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData)


export function AuthProvider(props : AuthProvider){
    const [user , setUser ] = useState<object | null >(null)
    const [loading , setLoading ] = useState(false)

    async function Login(cpf :string , password: string){
        console.log(`No auth  cpf: ${cpf} password : ${password}`)
        let data = JSON.stringify({
            cpf: cpf,
            password: password
        })

        
    let headers = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

    }

        const response  = await api.post("/user/login" ,{cpf:cpf , password : password}, headers)

        console.log("no auth" , response.data)
        //setLoading(true)
        /*const response = await SignIn()



        setUser(response.user)
        console.log('response ' ,response)
        setLoading(false)
        console.log('no login auth' ,cpf , password)

        await AsyncStorage.setItem('+bank:user' , JSON.stringify(response.user))
        await AsyncStorage.setItem('+bank:token' , response.token)
        /*const response = await api.post('/user/login' , {
            cpf:cpf,
            password : password
        })
        if(response.data){
            setUser(response.data.user)
        }*/

        console.log('user' ,user)
    }

    async function SignOut() {
        await AsyncStorage.clear()
    }
    useEffect(() => {
        async function loadStorageData() {
            const user = await AsyncStorage.getItem('+bank:user')
            const token =await AsyncStorage.getItem('+bank:token')

            if(user && token){
                setUser(JSON.parse(user))
                console.log(user , token)
            }
        }

        loadStorageData()
    },[])
  
    
    return (
         <AuthContext.Provider
            value={{signed:Boolean(user),loading , user , Login  ,SignOut}}
         >
            {props.children}

         </AuthContext.Provider>
    )
}

export default AuthContext