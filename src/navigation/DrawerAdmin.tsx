import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuComponent from '../components/MenuComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StackAdmin from './StackAdmin';
import ReporteAdminScreen from '../screens/ReporteAdminScreen';
import { Image } from 'react-native';
import ReportAdminScreen from '../screens/ReportAdminScreen';

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
      unmountOnBlur:true,
      headerStyle: {
        backgroundColor: '#980000',
      },
      headerTintColor: 'white',
      headerTitle: () => {
        return <>
            <Image
              source={require('../assets/img/menu/barra.png')}
              style={{
                width: 90,
                height: '85%',
                alignItems: 'center',
                left: 75
              }}
            />
        </>
      }
    }}
    >
      <Drawer.Screen name="Bandeja de alertas" component={StackAdmin}
      options={{
        drawerIcon:({color}) => (
          <Ionicons name='mail-unread' size={22} color={color} />)}}/>

      <Drawer.Screen name="Alertas derivadas" component={ReporteAdminScreen}
      options={{
        drawerIcon:({color}) => (
          <Ionicons name='paper-plane' size={22} color={color} />)}}/>

       <Drawer.Screen name="Reportes" component={ReportAdminScreen}
      options={{
        drawerIcon:({color}) => (
          <Ionicons name='document-attach' size={22} color={color} />)}}/>
          
    </Drawer.Navigator>
  );
}


export default DrawerAdmin;