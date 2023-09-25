import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import 'react-native-gesture-handler';
import { AuthProvider } from './src/context/AuthContext';


const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}


const App = () => {
  return (
    <NavigationContainer> 
      <AppState>
        <StackNavigator />
      </AppState>
    </NavigationContainer>
    
  )


}


export default App;