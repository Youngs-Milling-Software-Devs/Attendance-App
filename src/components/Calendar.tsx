import { View, Text } from "react-native";
import { Agenda, AgendaProps } from "react-native-calendars";

const CustomCalendar = (props: AgendaProps) => {
  return <Agenda {...props} />;
};

export default CustomCalendar;
