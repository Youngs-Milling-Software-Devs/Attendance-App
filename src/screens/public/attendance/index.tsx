import { Text, View } from "react-native";
import CustomCalendar from "../../../components/Calendar";
import { styles } from "./style";
import { useHooks } from "./hook";

interface AgendaItem {
  name: string;
  day: string;
}

export const AttendanceScreen = () => {
  const { markDates, items } = useHooks();
  const { container, calendarContainer } = styles;

  return (
    <View style={container}>
      <View style={calendarContainer}>
        <CustomCalendar
          markedDates={markDates}
          items={items}
          renderItem={(items: AgendaItem) => (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "flex-start",
                borderWidth: 1,
              }}>
              <Text>{items.name}</Text>
              <Text>{items.day}</Text>
            </View>
          )}
          renderEmptyData={() => (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Text>No record.</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};
