import { useEffect, useState } from "react";
import { View, Modal, Alert, StyleSheet, Text, Pressable,TextInput, TouchableOpacity } from "react-native";


import Icon from 'react-native-vector-icons/MaterialIcons'
import { useAuth } from "../../../contexts/useAuth";
import { styles , TabItem , TabText } from './styles.js'
export const ModalTransfer = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [disabled, setDisable ] =  useState(true)
    const [money , setMoney ] = useState('')
    const [pix , setPix ] = useState('')
    const [value , setValue] = useState(0)
    const [next , setNext] = useState(false)
    const {user} = useAuth()


    useEffect(() => {
        console.log('deposit ',user.deposit.value)
        user.deposit.map(item => setValue(item.value))

        if(value ){
            let coin = parseFloat(money)
            if(coin > 0 && coin < value ){
                console.log('valor em conta ' , value , ' coin ' , coin)
                setDisable(false)
            }else{
                setDisable(true)
            }
        }else{

        }
    })

    const getValue = () => {
        return(
            <View>
                <Text style={styles.modalText}>Qual valor da Transferência?</Text>
                <Text style={styles.valueText}>Saldo em conta : R$ {value}</Text>

                <View style={styles.viewInput}>
                    <Text style={styles.textInput}>R$ </Text>

                    <TextInput style={styles.inputvalue}
                        keyboardType="phone-pad"
                        placeholder="R$ "
                        value={money}
                        onChangeText={setMoney}
                    />
                </View>
            </View>
        )
    }

    const showNext = () => {
        setNext(true)
    }

    const getPix = () =>{
        return(
            <View>
                <Text style={styles.modalText}>Para qual pix deseja realizar a transferencia?</Text>
                

                <View style={styles.viewInput}>
                    

                    <TextInput style={styles.inputvalue}
                        keyboardType="phone-pad"
                       
                        value={pix}
                        onChangeText={setPix}
                    />
                </View>
            </View>
        )
    }
    const showModal = () => {
        setModalVisible(!modalVisible) 
        setNext(false)
        setMoney('')
    }
    return (
        <View>
            <TabItem onPress={() => setModalVisible(true)}>
                <Icon name="arrow-upward" size={24} color="#fff" />
                <TabText >Transferir</TabText>
                
            </TabItem>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                
                }}
            >
                <View>
                    <View style={styles.modalView}>
                        
                        <Pressable
                            style={styles.button }
                            onPress={showModal }
                        >
                            <Text style={styles.textStyle}>

                            <Icon name="close" size={30} color="#111" />
                            </Text>
                        </Pressable>
                        {!next? getValue():getPix()}
                        
                        <View style={styles.viewnavigation}>
                            <TouchableOpacity style={styles.navigationSend} disabled={disabled} onPress={showNext}>
                                <Icon name="east" size={40} color="#111" />
                            </TouchableOpacity>
                        </View>
                     
                    </View>
                </View>
            </Modal>
        </View>
    )
}
