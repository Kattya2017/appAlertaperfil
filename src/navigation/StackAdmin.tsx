import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AlertasDerivadasScreen from '../screens/AlertasDerivadasScreen';
import ReporteAdminScreen from '../screens/ReporteAdminScreen';




export type RootStackParamsAdmin = {
  Inicio:undefined,
  Alertas:{
    id_alerta:number,
    fecha:string,
    hora:string,
    alerta:string,
    tipo_area:number,
    area:number,
    administrado:string,
    telefono:string
  }
}
const Stack = createStackNavigator<RootStackParamsAdmin>();

const StackAdmin=()=> {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
    >
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="Alertas" component={AlertasDerivadasScreen} />
      
    </Stack.Navigator>
  );
}

export default StackAdmin