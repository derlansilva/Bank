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

type User ={
    cpf: string,
    email: string,
    name: string
    password : string,
    username: string,
    deposit:[]
    transfer: []
}

export function AuthProvider(props : AuthProvider){
    const [user , setUser ] = useState<object | null >(null)
    const [loading , setLoading ] = useState(true)

    async function Login(cpf :string , password: string){
        setLoading(true)
    
        const response  = await api.post("/user/login" ,{cpf:cpf , password : password})

        console.log("no auth" , response)
        setTimeout(() => {
            
        },1000)
        setLoading(true)



        setUser(response.data.user)
        setLoading(false)

        await AsyncStorage.setItem('+bank:user' , JSON.stringify(response.data.user))
        await AsyncStorage.setItem('+bank:token' , response.data.token)
        api.defaults.headers.common.authorization = `Bearer ${response.data.token}`
        if(response.data){
            setUser(response.data.user)
            setLoading(false)
        }

        console.log('user' ,user)
    }

    async function SignOut() {
        AsyncStorage.clear().then(() => {
            setUser(null)
        })
    }
    useEffect(() => {
        async function loadStorageData() {
            setLoading(false)
            const userdata = await AsyncStorage.getItem('+bank:user')
            const token =await AsyncStorage.getItem('+bank:token')

            if(userdata && token){
                setUser(JSON.parse(userdata))
                console.log(userdata , token)
                setLoading(false)
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