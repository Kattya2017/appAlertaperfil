import 'react-native-gesture-handler';

import React from 'react'
import { Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import AlertasDerivadasScreen from './src/screens/AlertasDerivadasScreen';
import HomeScreen from './src/screens/HomeScreen';


const App = () => {
  return (
    //<LoginScreen/>
    //<AlertasDerivadasScreen/>
    //<HomeScreen/>
    <AlertasDerivadasScreen/>
  )


}


export default App;