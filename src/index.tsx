import { StatusBar, Text, View } from "react-native";
import CustomInput from "./components/Input";
import { useForm } from "react-hook-form";
import { Credentials } from "./state/reducers/hrmis/loginSlice";

export default function App() {
  const { control } = useForm<Credentials>({
    defaultValues: {},
  });

  return (
    <View>
      <CustomInput control={control} name="Sample Input" />

      <StatusBar
        backgroundColor="maroon"
        barStyle="light-content"
        showHideTransition="slide"
      />
    </View>
  );
}
