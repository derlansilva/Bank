import React from "react";
import { View, Text, StyleSheet, Button , TextInput  } from "react-native"
import { SafeAreaView } from "react-navigation";
 
import Icon from 'react-native-vector-icons/MaterialIcons'

import {styles , Input , TextDecoret} from './loginstyles'
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/useAuth";
import { useNavigation } from "@react-navigation/native";

interface Data{
    cpf: string,
    password: string
}
export const SignIn:React.FC = () => {
    const navigation  = useNavigation()

    const [desabled , setDesabled ] = useState(true)
    const [cpf , setCpf] = useState('')
    const [password , setPassword] = useState('')
    const { Login } = useAuth()

    

    async function  handleLogin (){
        
        Login(cpf , password)
       
    }

    useEffect(() => {
        if(cpf.length == 11 && password.length == 4){
            setDesabled( false)
        }
        
        if(cpf.length < 11 && password.length < 4){
            setDesabled(true)
        }
    })

    

    return (
        <View style={styles.content}>
            <View style={styles.viewlogo}>
                 <Text style={styles.logo}>+Bank</Text>
            </View>
            <SafeAreaView style={styles.contentarea}> 
                <TextDecoret>CPF</TextDecoret>
                <Input
                    blurOnSubmit
                    placeholderTextColor = "#190C26"
                    keyboardType="numeric"
                    value={cpf}
                    onChangeText={setCpf}
                 />

                <TextDecoret>SENHA</TextDecoret>
                <Input 
                    blurOnSubmit
                    placeholderTextColor = "#190C26"
                    keyboardType="phone-pad"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    
                 />

                <View style={styles.button} >
                 <Button  disabled={desabled}  onPress={ handleLogin} title="CONTINUAR" color="#fff"/>
                </View>

                <View style={styles.buttontext}>
                    <Button  title="Abrir conta" color="#fff" onPress={() => navigation.navigate("signUp" as never)}/>
                    <Icon name="arrow-right" size={40} color="#fff" />
                </View>
            </SafeAreaView>
        
        </View>
    )
}



