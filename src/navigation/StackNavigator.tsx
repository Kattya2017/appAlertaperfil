import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import AlertasDerivadasScreen from "../screens/AlertasDerivadasScreen";
import BandejaAlertasScreen from "../screens/BandejaAlertasScreen";
import ListaInformaticosScrren from "../screens/ListaInformaticosScreen";
import ReporteAlertaScreen from "../screens/ReporteAlertaScreen";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      {/*<Stack.Screen name="Login" component={LoginScreen} />*/}
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Derivadas" component={AlertasDerivadasScreen}/>
      <Stack.Screen name="Bandeja" component={BandejaAlertasScreen}/>
      <Stack.Screen name="Lista" component={ListaInformaticosScrren}/>
      <Stack.Screen name="Reporte" component={ReporteAlertaScreen}/>
    </Stack.Navigator>
  );
}