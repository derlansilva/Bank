import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons' 

import  QRcode from 'react-native-qrcode-svg'

import {Container , Code , Nav , NavItems , NavText , SignOutButton ,SignOutButtonText } from './styles'

export function Menu({translateY}){
    return(
        <Container style={{
            opacity: translateY.interpolate({
                inputRange:[ 0 ,150 ],
                outputRange: [0 ,1]
            })
        }} >
            <Code>
                <QRcode 
                 value="1000"
                 size={80}
                 fgColor="#fff"
                 bgColor ="#8B10AE"
                />
            </Code>
            <Nav>
                <NavItems>
                    <Icon name="help-outline" size={20} color="#fff" />
                    <NavText>Me ajuda</NavText>
                </NavItems>
                <NavItems>
                    <Icon name="person-outline" size={20} color="#fff" />
                    <NavText>Perfil</NavText>
                </NavItems>
                <NavItems>
                    <Icon name="credit-card" size={20} color="#fff" />
                    <NavText>Configurar Cartão</NavText>
                </NavItems>
                <NavItems>
                    <Icon name="smartphone" size={20} color="#fff" />
                    <NavText>Configurações do app</NavText>
                </NavItems>
            </Nav>

            <SignOutButton onPress={() =>  navigation.navigate('signUp')}>
                <SignOutButtonText>Sair</SignOutButtonText>
            </SignOutButton>
        </Container>
    )
}