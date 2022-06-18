import React, { useState } from "react";

import Icon from 'react-native-vector-icons/MaterialIcons'
import { ModalTransfer } from "../Modal/transfer/modalTransfer";

import { Container, TabsContainer, TabItem, TabText } from './styles.js'
import { Modal, StyleSheet, View, Alert, Text, Pressable } from "react-native";
import { ModalReceived } from "../Modal/received/modalReceived";


export function Tabs() {
    const [show, setShow] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    function showModal() {
        console.log('show modal')
        setShow(true)
    }
    return (
        <Container>
            <TabsContainer>

                <TabItem>
                    <Icon name="person-add" size={24} color="#fff" />
                    <TabText>Indicar amigos</TabText>
                </TabItem>
                <ModalReceived/>
               
                <ModalTransfer/>

                <TabItem>
                    <Icon name="chat-bubble-outline" size={24} color="#fff" />
                    <TabText>Enviar</TabText>
                </TabItem>

                <TabItem>
                    <Icon name="lock" size={24} color="#fff" />
                    <TabText>Bloquear cartão</TabText>
                </TabItem>

            </TabsContainer>
           
        </Container>
    )
}
