import { StyleSheet } from "react-native"
import styled from 'styled-components/native'

export const Input = styled.TextInput`
    width: 80%;
    height: 35px;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: rgba(255,255,255 ,0.8)
    color: #FFF;
    margin-bottom: 10px;
    font-size: 20px;
`

export const Botton = styled.View`
  color: #FFF;
  margin-top : 50px;
`

export const TextDecoret = styled.Text`
    color: #FFF;
    width: 80%;
    opacity: 0.5;
`
export const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: '100%',
        height :'100%',
        backgroundColor: '#06A8B1',
        
        color: "#fff"
    },
    viewlogo:{

        alignItems:'center',
        justifyContent:"center",
        
        marginTop: 30,
    },
    logo:{
        
        color:'#caced4',
        fontSize:30,
        marginTop:20,
      
        
    },
    contentarea:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop: 10,
    },
    
    input:  {
        width: 300,
        height: 40,
        margin: 10,
        color: '#fff',
        padding: 10,
        fontSize:30,
    },
    button:{
        width: 300,
        height: 60,
        borderColor: '#fff',
        borderWidth: 0.4,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop:20,
        marginBottom: 30,
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
    buttontext:{
        
        flexDirection: 'row',
        marginBottom: 10,
    }
    
}); 