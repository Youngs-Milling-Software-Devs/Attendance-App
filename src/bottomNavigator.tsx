import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AttendanceScreen } from "./screens/public/attendance";
import { CompensationScreen } from "./screens/public/compensation";

const Tab = createBottomTabNavigator();

export const BottomScreenNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Attendance"
        component={AttendanceScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Compensation"
        component={CompensationScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="file-tray-sharp" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
