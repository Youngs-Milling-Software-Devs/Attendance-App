import { View, Text } from "react-native";
import { useForm } from "react-hook-form";
import { styles } from "./style";
import { Image } from "expo-image";
import logo from "./../../../../assets/logo.png";
import bg1 from "./../../../../assets/login-bg1.png";
import bg2 from "./../../../../assets/login-bg2.png";
import bg3 from "./../../../../assets/login-bg3.png";
import CustomInput from "../../../components/Input";
import { Credentials } from "../../../state/reducers/hrmis/loginSlice";
import { TextInput, Button } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { useHooks } from "./hook";
import { EPublicScreen } from "../../../constants/enums";

const {
  container,
  headerLogo,
  loginContainer,
  bgStyle1,
  bgStyle2,
  loginBody,
  bgStyle3,
  labelHeader,
  loginButton,
} = styles;

export const LoginScreen = () => {
  const { navigation } = useHooks();

  const { control } = useForm<Credentials>({
    defaultValues: {},
  });

  return (
    <View style={container}>
      <Image source={logo} style={headerLogo} />

      <Text style={labelHeader}>
        <AntDesign name="lock" size={50} color="maroon" />
        Sign In
      </Text>

      <View style={loginContainer}>
        <Image source={bg1} style={bgStyle1} />
        <Image source={bg2} style={bgStyle2} />
        <Image source={bg3} style={bgStyle3} />
        <View style={loginBody}>
          <CustomInput
            control={control}
            name="username"
            label="Username"
            placeholder="Username"
            dense={true}
            rules={{ required: "Username is required" }}
            right={<TextInput.Icon icon="account" />}
          />
          <CustomInput
            control={control}
            name="password"
            label="Password"
            placeholder="Password"
            dense={true}
            rules={{ required: "Password is required" }}
            right={<TextInput.Icon icon="lock-open" />}
          />
          <Button
            icon="camera"
            mode="contained"
            onPress={() => navigation.navigate(EPublicScreen.DTR)}
            style={loginButton}>
            Login
          </Button>
        </View>
      </View>
    </View>
  );
};
