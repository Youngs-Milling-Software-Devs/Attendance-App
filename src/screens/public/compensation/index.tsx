import { Text, View, SectionList, FlatList } from "react-native";
import { useHooks } from "./hook";
import { styles } from "./style";
import CustomFlatList from "../../../components/FlatList";
import { Card } from "react-native-paper";

export const CompensationScreen = () => {
  const { data } = useHooks();
  const {
    container,
    header,
    subHeader,
    labelHeader,
    labelSubHeader,
    label,
    subLabelContainer,
  } = styles;

  return (
    <View style={container}>
      <Text style={header}>Molave Youngs Milling Group</Text>
      <Text style={subHeader}>
        Mabini St., Maloloy-on, Molave, Zamboanga Del Sur
      </Text>

      <Text style={labelHeader}>Bryan Villarubia</Text>
      <Text style={labelSubHeader}>March 1-15, 2024</Text>

      <CustomFlatList data={data} />
    </View>
  );
};
