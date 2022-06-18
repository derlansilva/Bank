import styled from 'styled-components/native'

import { StyleSheet } from 'react-native';
export const TabItem = styled.TouchableOpacity`
    width : 100px;
    height: 100px;
    background: rgba(255 , 255 ,255,0.2 );
    border-radius:  3px;
    margin-left: 10px;
    padding: 10px;
    justify-content: space-between;
`

export const TabText = styled.Text`
    font-size: 13px;
    color: #fff
`;

export const Container = styled.View`

    background: #FFF;
    height: 100%;
    align-items: center;
 
    
`

export const styles = StyleSheet.create({
    ViewClose:{
        width: '100%',
        marginTop: 50,
        marginLeft: 30,
    }
})