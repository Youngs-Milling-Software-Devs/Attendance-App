import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  headerLogo: {
    width: 200,
    height: 200,
    position: "absolute",
    top: 0,
    left: -10,
  },
  labelHeader: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "900",
    color: "maroon",
    position: "absolute",
    top: 60,
    right: 40,
  },
  loginContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  bgStyle1: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
  },
  bgStyle2: {
    width: "100%",
    height: "90%",
    position: "absolute",
    top: "10%",
  },
  bgStyle3: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "20%",
  },
  loginBody: {
    paddingVertical: 70,
    paddingHorizontal: 50,
    width: "100%",
    height: "80%",
    position: "absolute",
    top: "20%",
    flex: 1,
    gap: 20,
    justifyContent: "flex-start",
  },
  loginButton: {
    marginTop: 20,
  },
});

export { styles };
