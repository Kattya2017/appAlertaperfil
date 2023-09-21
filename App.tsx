import 'react-native-gesture-handler';

import React from 'react'
import { Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import HomeScreen from './src/screens/HomeScreen';


const App = () => {
  return (
    <NavigationContainer> 
      <StackNavigator/>
    </NavigationContainer>
    
  )


}


export default App;