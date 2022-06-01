import Icon from 'react-native-vector-icons/MaterialIcons' 
import { Header } from "../../components/Header";
import { Tabs } from "../../components/Tabs";


import { PanGestureHandler, TouchableOpacity  } from 'react-native-gesture-handler';
import { Hide ,Container,CardHeader , Content , Card , CardContend ,CardFooter , Title , Description,Annotation} from "./styles";
import { useAuth } from '../../contexts/useAuth';
import { useEffect, useState } from 'react';
import { Button, View } from 'react-native';

type User ={
    cpf: string,
    email: string,
    name: string
    password : string,
    username: string,
    deposit:[]
    transfer: []
}

export function Home() {
    const [value , setValue] = useState([])
    const [hide , setHide] = useState(true)
    const {user } = useAuth()

    const Visible =() => {
        if(hide){
            setHide(false)
        }else{
            setHide(true)
        }
 
    }
    useEffect(() => {
        console.log('user' , user)
        user.deposit.map(item => {
            setValue(item.value)
        })
        console.log('home ' , user.deposit)
    })
    return (
        <Container>
            <Header/>
            <Content>
              
                <PanGestureHandler>
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
                            { hide?<Description>R$ {value},00 </Description> : <Hide> </Hide> }
                            
                           
                        </CardContend>
                        <CardFooter>
                            <Annotation>Transferencia de R$ 20,00 recebida de Alinne fonseca hoje  as 10 horas </Annotation>
                        </CardFooter>
                    </Card>
                </PanGestureHandler>
               
            </Content>
            <Tabs/>
        </Container>
    )
}