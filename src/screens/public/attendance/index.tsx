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
  const {
    container,
    calendarContainer,
    dailyContentContainer,
    halfContentContainer,
    content,
  } = styles;

  return (
    <View style={container}>
      <View style={calendarContainer}>
        <CustomCalendar
          markedDates={markDates}
          items={items}
          renderItem={(items: AgendaItem) => (
            <View style={dailyContentContainer}>
              <View style={halfContentContainer}>
                <View style={content}>
                  <Text>Time In</Text>
                  <Text>8:00 AM</Text>
                </View>
                <View style={content}>
                  <Text>Tardiness</Text>
                  <Text>0:00</Text>
                </View>
                <View style={content}>
                  <Text>Night Diff</Text>
                  <Text>1:00</Text>
                </View>
              </View>
              <View style={halfContentContainer}>
                <View style={content}>
                  <Text>Time Out</Text>
                  <Text>5:30 PM</Text>
                </View>
                <View style={content}>
                  <Text>Overtime</Text>
                  <Text>0:30</Text>
                </View>
                <View style={content}>
                  <Text>Total Working Hrs</Text>
                  <Text>8:00</Text>
                </View>
              </View>
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
              {/* <Text>{items.name}</Text>
              <Text>{items.day}</Text> */}
            </View>
          )}
        />
      </View>
    </View>
  );
};
