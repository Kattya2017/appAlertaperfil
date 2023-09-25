import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import AlertasDerivadasScreen from '../screens/AlertasDerivadasScreen';
import MenuComponent from '../components/MenuComponent';

const Drawer = createDrawerNavigator();

const DrawerAdmin=()=> {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <MenuComponent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Alerta" component={AlertasDerivadasScreen} />
    </Drawer.Navigator>
  );
}


export default DrawerAdmin;