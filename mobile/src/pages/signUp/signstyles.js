import { StyleSheet } from "react-native"
import styled from 'styled-components/native'

export const Input = styled.TextInput`
    width: 100%;
    height: 50px;
    font-size : 20px;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: rgba(255,255,255 ,0.8)
    color: #FFF;
    margin-bottom:15px;
    
`

export const TextDecoret = styled.Text`
    color: #FFF;
    width: 100%;
    opacity: 0.5;
`

export const ButtonBack = styled.Button`
    position: absolute;
    letft: 0;
`

export const ViewArea = styled.View`
    width: 80%;

`

export const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: '100%',
        height :'100%',
        backgroundColor: '#06A8B1',
        
        color: "#fff"
    },
    
    contentarea:{
        
        marginTop:100,
        alignItems:'center',
        justifyContent:'center',
   
    },
    
 
    button:{
        width: 300,
        height: 40,
        borderColor: '#fff',
        borderWidth: 0.4,
        borderRadius: 5,
     
        marginTop:15,
        
    },
    containerbutton:{
        borderColor: '#fff',
        width: 300,
        height: 40,
    },
    containertext:{
        width:'100%',
        marginLeft: 10,
        color: '#fff'
    },
    back:{
        flexDirection: "row",
        width:150,
        height:40,
        marginTop: 50,

        marginLeft:30,
        alignItems: 'center'
    },
    
    
});