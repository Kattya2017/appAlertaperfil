import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuComponent from '../components/MenuComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StackSupervisor from './StackSupervisor';
import { Image } from 'react-native';
import ReportSupervisorScreen from '../screens/ReportSupervisorScreen';

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
        unmountOnBlur: true,
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


      <Drawer.Screen name="Home" component={StackSupervisor}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='people-sharp' size={22} color={color} />
          )
        }} />
      <Drawer.Screen name="Reportes" component={ReportSupervisorScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='document-attach-outline' size={22} color={color} />
          )
        }} />

    </Drawer.Navigator>
  );
}


export default DrawerSupervisor;