import React, { useContext } from "react"
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import AuthContext from "./contexts/auth"
import { AppRoutes } from "./routes/app.routes"
import { AuthRoutes } from "./routes/auth.routes"
import { ActivityIndicator, View } from "react-native";

const Stack = createStackNavigator()

export const Routes : React.FC = () => {
    const {signed , loading , user} = useContext(AuthContext);
    console.log( 'login' ,signed , user ,loading)
    if(loading){
        return(
            <View style={{flex: 1,backgroundColor:'#06A8B1' ,justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size='large' color="#fff"/>
            </View>
        )
    }

    return  signed ?<AppRoutes/> : <AuthRoutes/>
}
  