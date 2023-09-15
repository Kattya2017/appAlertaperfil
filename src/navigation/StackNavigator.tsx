import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import AlertasDerivadasScreen from "../screens/AlertasDerivadasScreen";


const Stack = createStackNavigator();

export const StackNavigator = () => {
    return(
        <Stack.Screen name="HomeScreen" component={AlertasDerivadasScreen} />
    )
}