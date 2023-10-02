import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuComponent from '../components/MenuComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StackAdmin from './StackAdmin';
import ReporteAdminScreen from '../screens/ReporteAdminScreen';

const Drawer = createDrawerNavigator();

const DrawerAdmin=()=> {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <MenuComponent {...props} />}
    screenOptions={{
      drawerActiveBackgroundColor:'#840102',
      drawerActiveTintColor:'#fff',
      drawerInactiveTintColor:'#333',
      drawerLabelStyle:{marginLeft: -20, fontSize:15},
      unmountOnBlur:true
    }}
    >
      <Drawer.Screen name="Home" component={StackAdmin}
      options={{
        drawerIcon:({color}) => (
          <Ionicons name='home-sharp' size={22} color={color} />)}}/>
      <Drawer.Screen name="Alerta Derivada" component={ReporteAdminScreen}
      options={{
        drawerIcon:({color}) => (
          <Ionicons name='home-sharp' size={22} color={color} />)}}/>
      
    </Drawer.Navigator>
  );
}


export default DrawerAdmin;