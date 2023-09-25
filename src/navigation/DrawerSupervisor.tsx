import { createDrawerNavigator } from '@react-navigation/drawer';
import ListaInformaticosScrren from '../screens/ListaInformaticosScreen';
import ReporteAlertaScreen from '../screens/ReporteAlertaScreen';
import MenuComponent from '../components/MenuComponent';

const Drawer = createDrawerNavigator();

const DrawerSupervisor=()=> {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuComponent {...props} />}
    >
      <Drawer.Screen name="Lista" component={ListaInformaticosScrren} />
      <Drawer.Screen name="Reporte" component={ReporteAlertaScreen} />
    </Drawer.Navigator>
  );
}


export default DrawerSupervisor;