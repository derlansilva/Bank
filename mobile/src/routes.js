import React from "react"
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


import { TypedNavigator } from "@react-navigation/core"
import { Login } from "./pages/login"
import { Home } from "./pages/home"
import { SignUp } from "./pages/signUp"

const Stack = createStackNavigator()

export function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                
                <Stack.Screen name="login" component={Login}/>
                <Stack.Screen name="signUp" component={SignUp}/>
                <Stack.Screen name="home" component={Home}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}