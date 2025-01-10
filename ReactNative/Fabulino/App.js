import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from './splash'
import { MenuScreen } from './menu'
import { Juego1Screen } from './juego1'
import { Juego2Screen } from './juego2'
import { Juego3Screen } from './juego3'

const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator initialRouteName='splash' screenOptions={{ headerStyle: { backgroundColor: 'floralwhite' } }}>
      <Stack.Screen name='splash' component={SplashScreen} options={{ title: 'Inicio' }}></Stack.Screen>
      <Stack.Screen name='menu' component={MenuScreen} options={{ title: 'Menu' }}></Stack.Screen>
      <Stack.Screen name='juego1' component={Juego1Screen} options={{ title: 'Buen toque, mal toque' }}></Stack.Screen>
      <Stack.Screen name='juego2' component={Juego2Screen} options={{ title: 'Mis emociones' }}></Stack.Screen>
      <Stack.Screen name='juego3' component={Juego3Screen} options={{ title: 'Mi albúm' }}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}