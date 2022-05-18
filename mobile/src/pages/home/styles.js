
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    home: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#190C26'
    },
    head: {
        display: 'flex',
        flex: 1,
        width: '100%',
        height:'20%',
        alignItems: 'center',
        justifyContent: 'center',
        color:'#caced4'
    },
    content: {
        
        width: '100%',
        height: '80%',
        backgroundColor: '#72758C'
    },
    headlogo:{
        position: 'absolute',
        flex : 1,
      
        width: '50%',
        height: '100%',
        left: 0,
 
    },
    headuser: {
        position: 'absolute',
        flex : 1,
       
        width: '50%',
        height: '100%',
        right: 0,
    },
    logo: {
        position: 'absolute',
        marginTop: 30,
        width: '50%',
        left: 5,
        fontSize: 30,
        color: '#caced4',
        borderColor: 'red',
    },
    username: {
        position: 'absolute',
        marginTop: 40,
        width: '50%',
        right: 5,
        color: '#caced4',
        borderColor: 'red',
    },
    contenthome:{
        display: 'flex',
        marginTop:-30,
        alignItems: 'center',
        width:'100%',
        height : '100%',
    },
    contentvalue:{
    
        justifyContent:'center',
        width: '80%',
        height:90,
        backgroundColor: '#caced4',
        borderRadius: 5,
        color: '#190C26',
       
    },
    value: {
        
        fontSize: 30,
       
    },
    contenttransitions: {
     
        flexDirection: 'row',
        justifyContent:'center',
        marginTop: 30,
        width: '100%',
        height:90,
      
        borderRadius: 5,
        color: '#190C26',
    },
    card1: {
      
        alignItems: 'center',
        justifyContent: 'center',
        left:10,
        width: '50%',
        
    },
    card2: {
    
        alignItems: 'center',
        justifyContent: 'center',
        right:10,
        width: '50%',
  
    },
    cardsend:{
        
        alignItems:'center',
        justifyContent: 'center',
        width:60,
        height: 60,
        backgroundColor: '#caced4',
        borderRadius: '50%',
  
    },
    cardreceived: {
        alignItems:'center',
        justifyContent: 'center',
        width:60,
        height: 60,
        borderRadius: '50%',
        backgroundColor: '#caced4',
        
        
    }
})