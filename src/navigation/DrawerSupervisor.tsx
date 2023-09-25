import { createDrawerNavigator } from '@react-navigation/drawer';
import ListaInformaticosScrren from '../screens/ListaInformaticosScreen';
import ReporteAlertaScreen from '../screens/ReporteAlertaScreen';
import MenuComponent from '../components/MenuComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const DrawerSupervisor=()=> {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuComponent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor:'#840102',
        drawerActiveTintColor:'#fff',
        drawerInactiveTintColor:'#333',
        drawerLabelStyle:{marginLeft: -20, fontSize: 15},
        unmountOnBlur: true
      }}
    >


      <Drawer.Screen name="Lista" component={ListaInformaticosScrren}
      options={{
        drawerIcon:({color})=>(
          <Ionicons name='people-sharp' size={22} color={color}/>
          )}}/>

      <Drawer.Screen name="Reporte" component={ReporteAlertaScreen}
      options={{
        drawerIcon:({color})=>(
          <Ionicons name='stats-chart-sharp' size={22} color={color}/>
        )
      }}
      />

    </Drawer.Navigator>
  );
}


export default DrawerSupervisor;