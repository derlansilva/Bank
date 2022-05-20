import React from "react";
import {Container , Top , Title} from './styles'

import Icon from 'react-native-vector-icons/MaterialIcons'

export function Header(){
    return(
        <Container>
            <Top>
                <Icon name="menu" size={30}  color="#fff"/>
                <Title>Ola derlansilva</Title>
            </Top>
        </Container>
    );
}