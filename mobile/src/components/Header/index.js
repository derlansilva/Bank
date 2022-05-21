import React from "react";
import {Container , Top , Title } from './styles'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { Button } from "react-native";

export function Header({navigation}){

    const handleMenu =(event) =>{
        console.log(event)
    }
    return(
        <Container>
            <Top>
                <Icon name="menu" size={30}  color="#fff" />
                <Title>Olá derlansilva </Title>
            </Top>
        </Container>
    );
}