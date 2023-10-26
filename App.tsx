import React, { useEffect,useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import 'react-native-gesture-handler';
import AuthContext, { AuthProvider } from './src/context/AuthContext';
import messaging from '@react-native-firebase/messaging';
import { Alert, PermissionsAndroid } from 'react-native';
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
const AppState = ({ children }: any) => {
  const {rol,user,token} = useContext(AuthContext)
  useEffect(() => {
    try {
      
      
      const unsubscribe = messaging().onMessage(async remoteMessage => {
        console.log(remoteMessage);
        

      });

      return unsubscribe
    } catch (error) {
      console.log(error);

    }
  }, []);
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