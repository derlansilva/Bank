import { Button, Modal, Pressable, View ,Text} from "react-native"

import { Container, TabItem , TabText , styles} from './styles.js'

import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState } from "react";


export const ModalReceived = () => {

    const [viseble , setVisible ] = useState(false)

    return (
        <View>
            <TabItem  onPress={() => setVisible(true)}>
                <Icon name="arrow-downward" size={24} color="#fff" />
                <TabText>Receber</TabText>
            </TabItem>
            <Modal 
                animationType="slide"
                transparent={true}
                visible={viseble}
                onRequestClose={ () => {
                    setVisible(!viseble)
                }}
            >
                <Container> 
                   
                        <View style={styles.ViewClose} >
                            <Pressable onPress={() => setVisible(!viseble)}>
                            <Icon name="close" size={30} color="#111" />
                            </Pressable>
                        </View>
                       <View>
                           <Text>
                               aqui voce vai pedir a chave para cadastrar  
                           </Text>
                       </View>
                 

                </Container>
            </Modal>
        </View>
    )
}