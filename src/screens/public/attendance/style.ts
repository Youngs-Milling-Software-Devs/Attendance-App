import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  calendarContainer: {
    width: "100%",
    height: "100%",
  },
  dailyContentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    borderBottomWidth: 0.2,
  },
  halfContentContainer: {
    width: "100%",
    height: "50%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 1,
    // borderColor: "red",
  },
  content: {
    width: "33%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "green",
  },
});

export { styles };
