import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons' 
import { Button } from "react-native"
import { useNavigation } from "@react-navigation/native";

import {Container , ViewBack, Code , Nav , NavItems, NavIcon , NavText , SignOutButton ,SignOutButtonText } from './styles'
import { useAuth } from "../../contexts/useAuth";

export function Menu(){
    const navigation  = useNavigation()

    const {SignOut} = useAuth()
    async function LogOut() {
        SignOut()
       
        navigation.navigate( 'login' as never)
    }
    return(
        <Container>
            <ViewBack  onPress={() => navigation.navigate('home' as never)}>
                    <Icon name="arrow-left" size={50} color="#fff" />
                    <Button  onPress={() => navigation.navigate("home" as never)} title="Home" color="#fff"/>
            </ViewBack>
            <Nav>
                <NavItems>
                    <NavIcon>
                        <Icon name="help-outline" size={20} color="#fff" />
                    </NavIcon>
                    <NavText>Me ajuda</NavText>
                </NavItems>
                <NavItems>
                    <NavIcon>
                    <Icon name="person-outline" size={20} color="#fff" />
                    </NavIcon>
                    <NavText>Perfil</NavText>
                </NavItems>
                <NavItems>
                    <NavIcon>
                    <Icon name="credit-card" size={20} color="#fff" />
                    </NavIcon>

                    <NavText>Configurar Cartão</NavText>
                </NavItems>
                <NavItems>
                    <NavIcon>
                    <Icon name="smartphone" size={20} color="#fff" />
                    </NavIcon>
                    <NavText>Configurações do app</NavText>
                </NavItems>
            </Nav>

            <SignOutButton onPress={LogOut}>
                <SignOutButtonText onPress={LogOut} >Sair</SignOutButtonText>
            </SignOutButton>
        </Container>
    )
}