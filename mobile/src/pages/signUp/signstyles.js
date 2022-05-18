import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: '100%',
        height :'100%',
        backgroundColor: '#190C26',
  
        color: "#fff"
    },
    viewlogo:{
        position:'absolute',
        flex:1,
        alignItems:'center',
        justifyContent:"center",
        marginLeft: '30%',
        marginTop: 50,
    },
    logo:{
        
        color:'#caced4',
        fontSize:30,
        marginTop:0,
      
        
    },
    contentarea:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    
    input:  {
        width: 300,
        height: 40,
        margin: 10,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#caced4',
        border: 3 ,
        borderRadius: 5,
        color: '#363f5f',
        borderWidth: 0.4,
        padding: 10,
    },
    button:{
        width: 300,
        height: 40,
        borderColor: '#fff',
        borderWidth: 0.4,
        borderRadius: 5,
        margin: 10,
        
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
    
});