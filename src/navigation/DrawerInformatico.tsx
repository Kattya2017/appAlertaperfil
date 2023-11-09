import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuComponent from '../components/MenuComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StackInformatico from './StackInformatico';
import { Image } from 'react-native';
import PendienteScreen from '../screens/PendienteScreen';
import StackInformaticoDos from './StackInformaticoDos';

const Drawer = createDrawerNavigator();

const DrawerInformatico = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuComponent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#840102',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: { marginLeft: -20, fontSize: 15 },
        unmountOnBlur: true,
        //headerShown:false
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

      <Drawer.Screen name="Bandeja de alertas" component={StackInformatico}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='mail-unread' size={22} color={color} />
          )
        }} />
      <Drawer.Screen name="Pendientes" component={StackInformaticoDos}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='alert-circle-outline' size={22} color={color} />
          )
        }} />
    </Drawer.Navigator>
  );
}


export default DrawerInformatico;