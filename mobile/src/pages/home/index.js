import { View, Text } from "react-native";


import { styles } from "./styles";

export function Home() {
    return (
        <View style={styles.home}>
            <View style={styles.head}>
                <View style={styles.headlogo}>
                    <Text style={styles.logo}>+Bank</Text>
                </View>
                <View style={styles.headuser}>
                    <Text style={styles.username}>username</Text>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.contenthome}>
                    <View style={styles.contentvalue}>
                        <Text style={styles.value}>R$ 1200,00</Text>
                    </View>
                    <View style={styles.contenttransitions}>
                        <View style={styles.card1}>
                            <View style={styles.cardsend}>
                                <Text>Enviar</Text>
                            </View>

                        </View>
                        <View style={styles.card2}>
                            <View style={styles.cardreceived}>
                                <Text>Receber</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    )
}