import { View, Text, StyleSheet, Button , TextInput } from "react-native"
import { SafeAreaView } from "react-navigation";
 
import Icon from 'react-native-vector-icons/MaterialIcons'

import {styles , Input, Botton , TextDecoret} from './loginstyles'

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
                <TextDecoret>CPF</TextDecoret>
                <Input

                    placeholderTextColor = "#190C26"
               
                    keyboardType="numeric"
                 />
                <TextDecoret>SENHA</TextDecoret>
                <Input 
                
        
                    placeholderTextColor = "#190C26"
                    keyboardType="phone-pad"
                    secureTextEntry={true}
                 
                 />
            

                <View style={styles.button}>
                <Button onPress={() => navigation.navigate('home')} title="CONTINUAR" color="#fff"/>
                </View>

                <View style={styles.buttontext}>
                    <Button onPress={handleSignUUp}  title="Abrir conta"  color="#fff"/>
                    <Icon name="arrow-right" size={40} color="#fff" />
                </View>
            </SafeAreaView>
        
        </View>
    )
}



