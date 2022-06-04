import { useEffect, useState } from "react";
import { View, Modal, Alert, StyleSheet, Text, Pressable,TextInput, TouchableOpacity } from "react-native";


import Icon from 'react-native-vector-icons/MaterialIcons'
import { useAuth } from "../../contexts/useAuth";
import { styles , TabItem , TabText } from './styles.js'
export const ModalTransfer = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [value , setValue] = useState(0)
    const {user} = useAuth()

    useEffect(() => {
        user.deposit.map(item => {
            setValue(item.value)
        })
    })

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
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>

                            <Icon name="close" size={30} color="#111" />
                            </Text>
                        </Pressable>
                        
                        <Text style={styles.modalText}>Qual valor da Transferência?</Text>
                        <Text style={styles.valueText}>Saldo em conta : R$ {value},00</Text>

                       <View style={styles.viewInput}>
                           <Text style={styles.textInput}>R$ </Text>

                            <TextInput style={styles.inputvalue}
                                keyboardType="phone-pad"
                                placeholder="R$ "
                            />
                       </View>
                        <View style={styles.viewnavigation}>
                            <TouchableOpacity style={styles.navigationSend} disabled={true}>
                                <Icon name="east" size={40} color="#111" />
                            </TouchableOpacity>
                        </View>
                     
                    </View>
                </View>
            </Modal>
        </View>
    )
}
