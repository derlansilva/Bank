import React from "react";

import { createStackNavigator} from '@react-navigation/stack'
import { SignIn } from "../pages/login";
import { SignUp } from "../pages/signUp";


const AuthStack  = createStackNavigator()
export const AuthRoutes : React.FC = () => (
    
    <AuthStack.Navigator screenOptions={{headerShown: false} }>
        
        <AuthStack.Screen name="login" component={SignIn}/>
        <AuthStack.Screen name="signUp" component={SignUp}/>
    </AuthStack.Navigator>
)
