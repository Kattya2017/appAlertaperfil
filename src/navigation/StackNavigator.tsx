import React, { useContext } from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import DrawerAdmin from "./DrawerAdmin";
import DrawerSupervisor from "./DrawerSupervisor";
import DrawerInformatico from "./DrawerInformatico";
import AuthContext from '../context/AuthContext';
import { LoadingScreen } from '../screens/LoadingScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const {rol,status} = useContext(AuthContext);

  if(status==='checking')return <LoadingScreen/>

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
        
      }}
      initialRouteName="DrawerAdmin"
    >
      {
        (status==='not-authenticated')?
        <>
        <Stack.Screen name="Login" component={LoginScreen} />
        </>
        :(rol==='USER_ADMIN')?
        <>
          <Stack.Screen name="Admin" component={DrawerAdmin} /> 
        </>
        :
        (rol==='USER_SUPERVISOR')?
        <>
          <Stack.Screen name="Supervisor" component={DrawerSupervisor}/>
        </>
        :
        <>
        <Stack.Screen name="Informatico" component={DrawerInformatico}/>
        </>
      }
      
      
      
      
    </Stack.Navigator>
  );
}