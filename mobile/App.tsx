import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Routes } from './src/routes';
import { AuthProvider } from './src/contexts/auth';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        {/* <StatusBar barStyle="light-content" backgroundColor='#8B10AE'/>*/}
        <Routes />
      </AuthProvider>
    </NavigationContainer>

  );
}

