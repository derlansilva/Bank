interface Response {
    token : string;
    user: {
        name:string;
        email:string;
        value: number
    }
}

export default function SignIn():Promise<Response>{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: "llldljasjdoffsaudflksj uinfkakjuufqjilj inadjiojfahdghhafjdqijluiajpq",
                user:{
                    name: 'derlansilva',
                    email: "drealnislvakklll",
                    value: 1200
                }
            })
        
        } , 1000)
    })
}