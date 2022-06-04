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


export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
      
        width:'100%',
        backgroundColor: "white",
        marginTop: 60,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        height: '100%'
        
    },
    button: {
        borderRadius: 20,
        width: '100%',
        backgroundColor: 'transparent'
  
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
   
    textStyle: {
       
        width:40,
        height: 40,
        marginLeft: 0,
    },
    modalText: {
        marginTop:30,
        marginBottom: 15,
        fontSize:20,
        textAlign: "center"
    },
    valueText:{
        opacity: 0.4,
    },
    tabItem: {
        width:100,
        height:100,
    },
    tabText:{
        fontSize:13,
        color:'#fff',
    },
    inputvalue:{
        width: '90%',
        height:50,
        
        fontSize:20,
    },
    viewInput:{
        width:'100%',
        height:50,
        marginTop:25,
        flexDirection:'row',
        borderBottomColor: (255 , 255 ,255,0.2),
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 10,
        alignItems:'center',
    },
    textInput:{
        width: '10%',
        fontSize: 20,
        opacity:0.5,
    },
    viewnavigation:{
        marginTop: 30,
        width: '100%',
    },
    navigationSend:{
        position: 'absolute',
        width: 50,
        height:50,
        backgroundColor:'#3071E7',
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
    }
});
