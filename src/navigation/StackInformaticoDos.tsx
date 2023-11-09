import { createStackNavigator } from '@react-navigation/stack';
import PendienteScreen from '../screens/PendienteScreen';
import AlertaPendienteScreen from '../screens/AlertaPendienteScreen';


export type RootStackParamsInformaticoDos = {
  Pendiente:undefined,
  AlertaPendiente:{
    id_alerta:number
  }
}
const Stack = createStackNavigator<RootStackParamsInformaticoDos>();

const StackInformaticoDos=()=> {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
    >
      <Stack.Screen name="Pendiente" component={PendienteScreen} />
      <Stack.Screen name="AlertaPendiente" component={AlertaPendienteScreen} />
    </Stack.Navigator>
  );
}

export default StackInformaticoDos