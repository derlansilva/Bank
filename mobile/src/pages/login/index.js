import { View, Text, StyleSheet, Button , TextInput } from "react-native"
import { SafeAreaView } from "react-navigation";


import {styles } from './loginstyles'

export const Login = ({navigation}) => {
    const handleSignUUp =( ) => {
        navigation.navigate('signUp')
    }
    return (
        <View style={styles.content}>
            <View style={styles.viewlogo}>
                 <Text style={styles.logo}>+Bank</Text>
            </View>
            <SafeAreaView style={styles.contentarea}> 
              
                <TextInput
                    style={styles.input} placeholder="CPF" 
                    placeholderTextColor = "#190C26"
               
                    keyboardType="numeric"
                 />
            
                <TextInput 
                    style={styles.input} 
                    placeholder="SENHA"
                    placeholderTextColor = "#190C26"
                    keyboardType="phone-pad"
                    secureTextEntry={true}
                 
                 />
            

                <View style={styles.button}>
                <Button onPress={() => navigation.navigate('home')} title="Sign" color="#fff"/>
                </View>

                <View style={styles.button}>
                    <Button onPress={handleSignUUp}  title="SignUp"  color="#fff"/>
                </View>
            </SafeAreaView>
        
        </View>
    )
}



