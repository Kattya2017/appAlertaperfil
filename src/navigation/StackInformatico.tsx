import { createStackNavigator } from '@react-navigation/stack';
import BandejaAlertasScreen from '../screens/BandejaAlertasScreen';
import ResponderAlerta from '../screens/ResponderAlerta';


export type RootStackParamsInformatico = {
  Inicio:undefined,
  Alertas:{
    id_alerta:number
  }
}
const Stack = createStackNavigator<RootStackParamsInformatico>();

const StackInformatico=()=> {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
    >
      <Stack.Screen name="Inicio" component={BandejaAlertasScreen} />
      <Stack.Screen name="Alertas" component={ResponderAlerta} />
    </Stack.Navigator>
  );
}

export default StackInformatico