import React from "react";
import {Container , Top , Title } from './styles'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { Button } from "react-native";
import { useAuth } from "../../contexts/useAuth";
import { useNavigation } from "@react-navigation/native";

export function Header(){
    const navigation  = useNavigation()
    const {user} = useAuth()
    console.log(user)
    const handleMenu =() =>{
        console.log()
    }
    return(
        <Container>
            <Top>
                <Icon name="menu" size={30}  color="#fff" onPress={() => navigation.navigate('menu' as never)} />
                <Title>Olá {user.name}</Title>
            </Top>
        </Container>
    );
}