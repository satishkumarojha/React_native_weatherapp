import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import CountryScreen from './src/screens/CountryScreen';
import Weather from './src/screens/Weather';
export type rootStackParams = {
  Home:undefined;
  CountryScreen:{
    country:string
  };
  Weather:{
    capital:string|undefined
  };
}
export default function App() {
  const Stack = createNativeStackNavigator<rootStackParams>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{headerShown:false}} component={Home}/>
        <Stack.Screen name="CountryScreen" options={{headerShown:false}} component={CountryScreen}/>
        <Stack.Screen name="Weather" options={{headerShown:false}} component={Weather}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}