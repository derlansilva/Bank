import { useEffect, useState } from "react"
import { View, Text, StyleSheet, Button,SafeAreaView , TextInput } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'

import {styles , Input , TextDecoret , ViewArea} from './signstyles'
export function SignUp({navigation}){
    const [confirm , setConfirm ] = useState(true)
    const [begin , setBegin] = useState(0)
    const [last , setLast] = useState(1)
    const [cpf, setCpf] = useState('')
    const [name , setName] = useState('')
    const [username , setUsername] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [confirmPassword , setConfirmPassword] = useState('')
    const set =["setCpf" , "setName"  ,"setUsername" , "setEmail" , "setPassword" ,  "setConfirm"]
    const listItems = [
        {item: "CPF", keyboardType : 'numeric' , value : cpf , set: setCpf} , 
        {item:"NOME COMPLETO", value : name , set: setName },
        {item: "COMO GOSTARIA DE SER CHAMADO?",  value : username , set: setUsername  } ,
        {item:  "E-MAIL" , value : email , set: setEmail  },
        {item: "SENHA" , keyboardType : 'numeric', value : password , set: setPassword  } , 
        {item: "CONFIRMAÇAO DE SENHA" , keyboardType : 'numeric' , value : confirmPassword , set: setConfirmPassword }
        ]

    useEffect(()=> {
        
        console.log('cpf' , cpf , cpf.length)
        if(cpf.length === 11){
            console.log("deveria habilitar")
            setConfirm(false)
        }
    })

    function handleItem(e){
        console.log(e.target.value)
    }

    function confirmNext(){
        setBegin(begin +1)
        setLast(last +1)
        setCpf('')
        setConfirm(true)
    }
    return(
        <View style={styles.content}>
             <View style={styles.back}  onPress={() => navigation.navigate('login')}>
                    <Icon name="arrow-left" size={40} color="#fff" />
                    <Button  onPress={() => navigation.navigate('login')} title="voltar" color="#fff"/>
            </View>
               
            <SafeAreaView style={styles.contentarea}> 
                {listItems.slice(begin,last).map((item, index) => {
                    return(
                        <ViewArea key={index}>
                            <TextDecoret key={index}>{item.item}</TextDecoret>
                            <Input 
                                keyboardType={item.keyboardType ? item.keyboardType : ''} 
                                value={item.value}
                                onChangeText ={ (text) => item.set( text)}
                                
                             />
                
                        </ViewArea>
    
                    )
                })}
                
                 <View style={styles.button}>
                    <Button title="Continuar" color="#fff" disabled={confirm} onPress={confirmNext}/>
                </View> 
               
            </SafeAreaView>
        
        </View>
    )
}