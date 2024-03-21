import MainApp from "./src/index";
import { Provider as StoreProvider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { store } from "./src/state/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { theme } from "./src/utils/theme";

function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <MainApp />
        </SafeAreaProvider>
      </PaperProvider>
    </StoreProvider>
  );
}

export default App;
