import { createStackNavigator } from '@react-navigation/stack';
import ListaInformaticosScrren from '../screens/ListaInformaticosScreen';
import ReporteAlertaScreen from '../screens/ReporteAlertaScreen';




export type RootStackParamsSupervisor = {
  Inicio:undefined,
  Reporte:{
    id_usuario:number,
    nombre:string
  }
}
const Stack = createStackNavigator<RootStackParamsSupervisor>();

const StackSupervisor=()=> {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
    >
      <Stack.Screen name="Inicio" component={ListaInformaticosScrren} />
      <Stack.Screen name="Reporte" component={ReporteAlertaScreen} />
    </Stack.Navigator>
  );
}

export default StackSupervisor