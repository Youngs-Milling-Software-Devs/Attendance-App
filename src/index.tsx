import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackNavigatorParamlist } from "../type";
import { LoginScreen } from "./screens/public/login";
import { EPublicScreen } from "./constants/enums";
import { BottomScreenNavigator } from "./bottomNavigator";

export default function MainNavigator() {
  const Stack = createNativeStackNavigator<HomeStackNavigatorParamlist>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={EPublicScreen.LOGIN}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name={EPublicScreen.LOGIN} component={LoginScreen} />
        <Stack.Screen
          name={EPublicScreen.BOTTOM_NAVIGATOR}
          component={BottomScreenNavigator}
        />
      </Stack.Navigator>

      <StatusBar
        backgroundColor="maroon"
        barStyle="light-content"
        showHideTransition="slide"
      />
    </NavigationContainer>
  );
}
