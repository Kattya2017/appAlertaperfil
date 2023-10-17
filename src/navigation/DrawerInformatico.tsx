import { createDrawerNavigator } from '@react-navigation/drawer';
import BandejaAlertasScreen from '../screens/BandejaAlertasScreen';
import MenuComponent from '../components/MenuComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StackInformatico from './StackInformatico';

const Drawer = createDrawerNavigator();

const DrawerInformatico=()=> {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <MenuComponent {...props} />}
    screenOptions={{
      drawerActiveBackgroundColor:'#840102',
      drawerActiveTintColor:'#fff',
      drawerInactiveTintColor:'#333',
      drawerLabelStyle:{marginLeft: -20, fontSize: 15},
      unmountOnBlur: true,
      //headerShown:false
    }}
    >

    <Drawer.Screen name="Bandeja" component={StackInformatico}
      options={{
        drawerIcon:({color})=>(
        <Ionicons name='mail-sharp' size={22} color={color}/>
        )}}/>
    </Drawer.Navigator>
  );
}


export default DrawerInformatico;