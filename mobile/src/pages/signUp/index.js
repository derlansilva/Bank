import { View, Text, StyleSheet, Button,SafeAreaView , TextInput } from "react-native"

import {styles} from './signstyles'
export function SignUp({navigation}){
    return(
        <View style={styles.content}>
            <View style={styles.viewlogo}>
                 <Text style={styles.logo}>+Bank</Text>
            </View>
            <SafeAreaView style={styles.contentarea}> 
              
                <TextInput 
                    style={styles.input} 
                    keyboardType="phone-pad"
                    placeholder="CPF"
                 />
                <TextInput style={styles.input} placeholder="NOME COMPLETO" />
                <TextInput style={styles.input} placeholder="NOME DE USUARIO" />
                <TextInput style={styles.input} placeholder="EMAIL"  keyboardType="email-address"/>
            
                <TextInput style={styles.input} placeholder="SENHA" keyboardType="phone-pad"  secureTextEntry={true} />
            

                <View style={styles.button}>
                    <Button title="Salvar" color="#fff"/>
                </View>

                <View style={styles.button}>
                    <Button onPress={() => navigation.navigate('login')} title="voltar" color="#fff"/>
                </View>
               
            </SafeAreaView>
        
        </View>
    )
}