import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackNavigatorParamlist } from "../type";
import { LoginScreen } from "./screens/public/login";
import { DtrScreen } from "./screens/public/dtr";
import { EPublicScreen } from "./constants/enums";

export default function App() {
  const Stack = createNativeStackNavigator<HomeStackNavigatorParamlist>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={EPublicScreen.LOGIN}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name={EPublicScreen.LOGIN} component={LoginScreen} />
        <Stack.Screen name={EPublicScreen.DTR} component={DtrScreen} />
      </Stack.Navigator>

      <StatusBar
        backgroundColor="maroon"
        barStyle="light-content"
        showHideTransition="slide"
      />
    </NavigationContainer>
  );
}
