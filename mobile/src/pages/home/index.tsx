import Icon from 'react-native-vector-icons/MaterialIcons' 
import { Header } from "../../components/Header";
import { Tabs } from "../../components/Tabs";


import { PanGestureHandler, TouchableOpacity  } from 'react-native-gesture-handler';
import { Hide ,Container,CardHeader , Content , Card , CardContend ,CardFooter , Title , Description,Annotation} from "./styles";
import { useAuth } from '../../contexts/useAuth';
import { useEffect, useState } from 'react';
import { Button, View  } from 'react-native';
import { ModalTransfer } from '../../components/Modal/transfer/modalTransfer';
import { api } from '../../services/api';

type User ={
    cpf: string,
    email: string,
    name: string
    password : string,
    username: string,
    deposit:[]
    
}

export function Home() {
    const [value , setValue] = useState('')
    const [hide , setHide] = useState(true)
    const {user } = useAuth()

    const Visible =() => {
        if(hide){
            setHide(false)
        }else{
            setHide(true)
        }
 
    }
    async function getTransfers(){
        const response = await api.get('/user/show' , {
            headers: {
                'Content-Type': 'application/json',
                'id': user.cpf
            }
        })

        console.log('response no home ' , response)
    }
    useEffect(() => {
       
        function getData(){
            console.log(user.name)
            user.deposit.map(item =>setValue(item.value))
        }
   
        getData()
        getTransfers()
 
    },[])
    return (
        <Container>
            <Header/>
            <Content>
              
                <>
                   
                    <Card>
                        <CardHeader>
                            <Icon name="attach-money" size={28}  color="#666"/>
                            <TouchableOpacity onPress={Visible}>
                                {hide ? <Icon  name="visibility-off" size={28}  color="#666"/> 
                                : <Icon  name="visibility" size={28}  color="#666"/>}
                                
                            </TouchableOpacity>

                        </CardHeader> 
                        <CardContend>
                            <Title>Saldo</Title>
                            { hide?<Description>R$ {value} </Description> : <Hide> </Hide> }
                            
                           
                        </CardContend>
                        <CardFooter>
                            <Annotation>Transferencia de R$ 20,00 recebida de Alinne fonseca hoje  as 10 horas </Annotation>
                        </CardFooter>
                    </Card>
                </>
               
            </Content>
            <Tabs/>
        </Container>
    )
}