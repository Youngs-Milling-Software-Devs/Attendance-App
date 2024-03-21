import { HomeScreenNavigationProp } from "../../../../type";
import { useNavigation } from "@react-navigation/native";

export const useHooks = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return { navigation };
};
