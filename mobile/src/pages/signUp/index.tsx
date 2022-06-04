import { useEffect, useState } from "react"
import { View, Text, StyleSheet, Button, SafeAreaView, TextInput } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from "@react-navigation/native";

import AppIntroSlider from "react-native-app-intro-slider"
import { styles, Input, TextDecoret, ViewArea } from './signstyles'
import { api } from "../../services/api";
const slider = []
type Data = {
    cpf: string,
    email: string,
    name: string,
    password: string,
    username: string
}
export const SignUp: React.FC = () => {

    const navigation = useNavigation()
    const [confirm, setConfirm] = useState(true)
    const [begin, setBegin] = useState(0)
    const [last, setLast] = useState(1)
    const [cpf, setCpf] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [textButton, setTextButton] = useState('')
    const [data, setData] = useState<Data | null>(null)
    const [alert, setAlert] = useState(false)
    const [message, setMessage] = useState('')
    const listItems = [
        { item: "CPF", keyboardType: 'numeric', value: cpf, set: setCpf },
        {item :'NOME COMPLETO' , value: name , set: setName},
        { item: "E-MAIL", value: email, set: setEmail },
        { item: "SENHA", keyboardType: 'numeric', value: password, set: setPassword },
        { item: "CONFIRMAÇAO DE SENHA", keyboardType: 'numeric', value: confirmPassword, set: setConfirmPassword }
    ]
    async function findUser() {
        const response = await api.get(`/user/find/${cpf}`)

        console.log('usuario retornado', response.data)
        setData(response.data)
    }

    useEffect(() => {
        switch (begin) {
            case (0):
                console.log('begin 0')
                if (cpf.length === 11) {
                   
                    findUser()
                }
                if (cpf.length < 11) {
                    setMessage('')
                    setAlert(false)
                    setConfirm(true)
                }
                if (cpf === data?.cpf) {
                    setAlert(true)
                    setMessage('Cpf já cadastrado')
                    setConfirm(true)
                } else {
                    // aqui vou verificar se o cpf e valido
                    setAlert(false)
                    setMessage('')
                    if(cpf.length === 11){
                        setConfirm(false)
                    }
                }
                break;
            case (1):
                setConfirm(true)
                console.log('begin 1')
                if (name.length > 0) {
                    setConfirm(false)
                }
                break;
            case (2):

                break;
            case (3):
                setConfirm(true)
                console.log('begin 4')
                if (password.length > 4) {
                    setConfirm(false)
                }
                break;
            case (4):
                setConfirm(true)
                console.log('begin 5')
                if (confirmPassword.length > 0 && confirmPassword === password) {
                    setConfirm(false)
                    setTextButton("Salvar")
                }
                break;

            default:
                console.log('default')
        }



    })

    async function handleSubmit() {
        console.log('hora de da submit')
    }


    async function NextPage() {

        setBegin(begin + 1)
        setLast(last + 1)
        setCpf('')
        //setConfirm(true)

    }
    return (
        <View style={styles.content}>
            <View style={styles.back}>
                <Icon name="arrow-left" size={40} color="#fff" />
                <Button onPress={() => navigation.navigate('login' as never)} title="voltar" color="#fff" />
            </View>

            <SafeAreaView style={styles.contentarea}>
                {listItems.slice(begin, last).map((item, index) => {
                    return (
                        <ViewArea key={index}>
                            {/* {alert?  <Text style={styles.alert}>Cpf Ja cadastrado</Text> :<Text></Text> } */}

                            <TextDecoret key={index}> {item.item} {alert ? `                                     ${message}` : ''}</TextDecoret>
                            <Input
                                keyboardType={item.keyboardType ? item.keyboardType : ''}
                                value={item.value}
                                onChangeText={item.set}
                                autoCorrect={true}
                            />

                        </ViewArea>

                    )
                })}

                <View style={styles.button}>
                    <Button title={textButton.length > 0 ? textButton : "Continuar"} color="#fff" disabled={confirm} onPress={confirmPassword.length > 0 ? handleSubmit : NextPage} />
                </View>

            </SafeAreaView>

        </View>
    )
}