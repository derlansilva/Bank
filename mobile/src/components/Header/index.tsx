import React, { useEffect, useState } from "react";
import {Container , Top , Title } from './styles'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { Button } from "react-native";
import { useAuth } from "../../contexts/useAuth";
import { useNavigation } from "@react-navigation/native";
import { Menu } from "../Menu";

export function Header(){
    const navigation  = useNavigation()
    const {user} = useAuth()

    const [userName , setUserName] = useState('')

    const handleMenu =() =>{
        console.log()
    }
    useEffect(() => {
        setUserName(user.username)
    }, [])
   
    return(
        <Container>
            <Top>
                <Menu/>
                <Title>Olá {userName}</Title>
            </Top>
        </Container>
    );
}