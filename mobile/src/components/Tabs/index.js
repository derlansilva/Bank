import React from "react";

import Icon from 'react-native-vector-icons/MaterialIcons'

import {Container , TabsContainer , TabItem , TabText} from './styles.js'
export function Tabs() {
    return(
        <Container>
            <TabsContainer>
                <TabItem>
                    <Icon name="person-add" size={24} color="#fff" />
                    <TabText>Indicar amigos</TabText>
                </TabItem> 

                <TabItem>
                    <Icon name="chat-bubble-outline" size={24} color="#fff" />
                    <TabText>Enviar</TabText>
                </TabItem> 

                <TabItem>
                    <Icon name="arrow-downward" size={24} color="#fff" />
                    <TabText>Receber</TabText>
                </TabItem> 

                <TabItem>
                    <Icon name="arrow-upward" size={24} color="#fff" />
                    <TabText>Transferir</TabText>
                </TabItem> 

                <TabItem>
                    <Icon name="lock" size={24} color="#fff" />
                    <TabText>Bloquear cartão</TabText>
                </TabItem> 
                
            </TabsContainer>
        </Container>
    )
}