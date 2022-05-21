import { View, Text, StyleSheet, Button , TextInput } from "react-native"
import { SafeAreaView } from "react-navigation";
 
import Icon from 'react-native-vector-icons/MaterialIcons'

import {styles , Input , TextDecoret} from './loginstyles'
import { api } from "../../services/api";
import { useEffect, useState } from "react";

export const Login = ({navigation}) => {
    const [desabled , setDesabled ] = useState(true)
    const [cpf , setCpf] = useState([])
    const [password , setPassword] = useState([])

    async function  handleLogin (){
            data ={cpf :cpf , password : password}
            JSON.stringify(data)
            console.log( 'cpf:' ,cpf ,'password: ', password)
    
            console.log('deve enviar a solicitação' ,data)

            const response = await api.post('/user/login' , 
                { cpf: cpf , password : password}
            , {headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'}}
            )

            setDesabled(false)
        
       

             console.log('Response ', response)
    }

    useEffect(() =>{
        console.log(cpf , cpf.length)
        if(cpf.length === 11 && password.length=== 5){
            setDesabled(false)
        }
    })

    const handleSignUUp =( ) => {
        navigation.navigate('signUp')
    }

    return (
        <View style={styles.content}>
            <View style={styles.viewlogo}>
                 <Text style={styles.logo}>+Bank</Text>
            </View>
            <SafeAreaView style={styles.contentarea}> 
                <TextDecoret>CPF</TextDecoret>
                <Input
                    placeholderTextColor = "#190C26"
                    keyboardType="numeric"
                    value={cpf}
                    onChange={text => setCpf(text)}
                 />

                <TextDecoret>SENHA</TextDecoret>
                <Input 
                    placeholderTextColor = "#190C26"
                    keyboardType="phone-pad"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={text => setPassword(text)}
                 />

                <View style={styles.button}>
                <Button  disabled={desabled} onPress={() => handleLogin()} title="CONTINUAR" color="#fff"/>
                </View>

                <View style={styles.buttontext}>
                    <Button onPress={handleSignUUp}  title="Abrir conta"  color="#fff"/>
                    <Icon name="arrow-right" size={40} color="#fff" />
                </View>
            </SafeAreaView>
        
        </View>
    )
}



