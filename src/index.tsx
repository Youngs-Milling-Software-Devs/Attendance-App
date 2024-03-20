import { StatusBar, Text, View } from "react-native";
<<<<<<< HEAD
import CustomInput from "./components/Input";
import { useForm } from "react-hook-form";
import { Credentials } from "./state/reducers/hrmis/loginSlice";
=======
>>>>>>> 986ab0581b76899af3024eb9990df269a841e3f6

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
