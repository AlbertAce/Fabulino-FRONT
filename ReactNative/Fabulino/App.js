import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from './splash'
import { Juego1Screen } from './juego1'
import { Pagina1Screen } from './pagina1'
import { Pagina2Screen } from './pagina2'

const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator initialRouteName='splash' screenOptions={{ headerStyle: { backgroundColor: 'floralwhite' } }}>
      <Stack.Screen name='splash' component={SplashScreen} options={{ title: 'Inicio' }}></Stack.Screen>
      <Stack.Screen name='juego1' component={Juego1Screen} options={{ title: 'Buen toque, mal toque' }}></Stack.Screen>
      <Stack.Screen name='pagina1' component={Pagina1Screen} options={{ title: 'Relaja' }}></Stack.Screen>
      <Stack.Screen name='pagina2' component={Pagina2Screen} options={{ title: 'Así va la cosa' }}></Stack.Screen>
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
