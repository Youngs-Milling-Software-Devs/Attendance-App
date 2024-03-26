import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    width: "100%",
    height: "100%",
  },
  filterContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
  },
  subHeader: {
    textAlign: "center",
  },
  labelHeader: {
    paddingTop: 15,
    textTransform: "uppercase",
    fontWeight: "900",
  },
  labelSubHeader: {
    marginBottom: 15,
  },
  // label and subLabelContainer CSS is used in FlatList Component
  label: {
    fontWeight: "900",
  },
  subLabelContainer: {
    paddingHorizontal: 15,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dropDownContainer: {
    width: "50%",
  },
  cutOffContainer: {
    padding: 0,
    gap: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export { styles };
