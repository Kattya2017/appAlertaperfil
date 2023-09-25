import { createDrawerNavigator } from '@react-navigation/drawer';
import BandejaAlertasScreen from '../screens/BandejaAlertasScreen';
import MenuComponent from '../components/MenuComponent';

const Drawer = createDrawerNavigator();

const DrawerInformatico=()=> {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <MenuComponent {...props} />}
    >
      <Drawer.Screen name="Bandeja" component={BandejaAlertasScreen} />
    </Drawer.Navigator>
  );
}


export default DrawerInformatico;