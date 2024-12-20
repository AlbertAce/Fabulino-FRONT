import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from './splash'
import { ResultadoScreen } from './resultado'
import { TablaScreen } from './tabla'

const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator initialRouteName='splash' screenOptions={{ headerStyle: { backgroundColor: 'floralwhite' } }}>
      <Stack.Screen name='splash' component={SplashScreen} options={{ title: 'Alto!! y a soplar' }}></Stack.Screen>
      <Stack.Screen name='resultado' component={ResultadoScreen} options={{ title: 'Relaja' }}></Stack.Screen>
      <Stack.Screen name='tabla' component={TablaScreen} options={{ title: 'Así va la cosa' }}></Stack.Screen>
    </Stack.Navigator>
  )



}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>);


}
