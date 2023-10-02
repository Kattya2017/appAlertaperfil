import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuComponent from '../components/MenuComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StackSupervisor from './StackSupervisor';

const Drawer = createDrawerNavigator();

const DrawerSupervisor = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuComponent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#840102',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: { marginLeft: -20, fontSize: 15 },
        unmountOnBlur: true
      }}
    >


      <Drawer.Screen name="Home" component={StackSupervisor}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='people-sharp' size={22} color={color} />
          )
        }} />

    </Drawer.Navigator>
  );
}


export default DrawerSupervisor;