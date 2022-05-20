import Icon from 'react-native-vector-icons/MaterialIcons' 
import { Header } from "../../components/Header";
import { Tabs } from "../../components/Tabs";


import { Animated } from 'react-native';
import { PanGestureHandler , State } from 'react-native-gesture-handler';

import { Container,CardHeader , Content , Card , CardContend ,CardFooter , Title , Description,Annotation} from "./styles";
import { Menu } from '../../components/Menu';

export function Home({navigation}) {
    const translateY = new Animated.Value(0);

    const animatedEvent = Animated.event(
      [
        {
          nativeEvent: {
            translationY: translateY,
          },
        },
      ],
      { useNativeDriver: true },
    );

    
    function onHandlerStateChanged(event){

    }
    return (
        <Container>
            <Header/>
            <Content>
                <Menu translateY={translateY}/>
                <PanGestureHandler
                     onGestureEvent={animatedEvent}
                     onHandlerStateChange={onHandlerStateChanged}
                >
                    <Card style={{
              transform: [{
                translateY: translateY.interpolate({
                  inputRange: [-350, 0, 380],
                  outputRange: [-50, 0, 380],
                  extrapolate: 'clamp',
                }),
              }],
            }}
            >
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
            <Tabs translateY={translateY}/>
        </Container>
    )
}