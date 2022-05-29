import 'react-native-gesture-handler';
import React from "react";

import {NavigationContainer} from '@react-navigation/native'

import { Home } from "../pages/home";
import { Menu } from "../components/Menu";


import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../pages/login';

type Root = {
    home: undefined
    menu: undefined
    login: undefined
}
 
const Stack = createStackNavigator<Root>();

export const AppRoutes  = () => {
        return(
  
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="home" component={Home}/>
                <Stack.Screen name="menu" component={Menu}/>
                <Stack.Screen name='login' component={SignIn}/>
            </Stack.Navigator>
    
        )
}

/*

import { createDrawerNavigator  } from '@react-navigation/drawer'
const Drawer = createDrawerNavigator()

 export const AppRoutes : React.FC = () => {
        return(
  
            <Drawer.Navigator initialRouteName="home">
                <Drawer.Screen name="home" component={Home}/>
                <Drawer.Screen name="menu" component={Menu}/>
            </Drawer.Navigator>
    
        )
}

*/