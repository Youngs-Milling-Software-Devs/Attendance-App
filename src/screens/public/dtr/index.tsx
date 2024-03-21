import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AttendanceScreen } from "../attendance";
import { CompensationScreen } from "../compensation";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export const DtrScreen = () => {
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
