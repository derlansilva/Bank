import Icon from 'react-native-vector-icons/MaterialIcons' 
import { Header } from "../../components/Header";
import { Tabs } from "../../components/Tabs";


import { PanGestureHandler  } from 'react-native-gesture-handler';
import { Container,CardHeader , Content , Card , CardContend ,CardFooter , Title , Description,Annotation} from "./styles";

export function Home({navigation}) {
    
    return (
        <Container>
            <Header/>
            <Content>
              
                <PanGestureHandler>
                    <Card>
                        <CardHeader>
                            <Icon name="attach-money" size={28}  color="#666"/>
                            <Icon name="visibility-off" size={28}  color="#666"/>
                        </CardHeader> 
                        <CardContend>
                            <Title>Saldo</Title>
                            <Description>R$  197.990,00 </Description>
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