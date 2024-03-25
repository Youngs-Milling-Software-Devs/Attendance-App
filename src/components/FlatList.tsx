import { Text, View, FlatList, FlatListProps } from "react-native";
import { styles } from "../screens/public/compensation/style";

export type valueType = {
  description: string;
  value: string;
};

export type dataTypes = {
  id: string;
  title: string;
  data: valueType[];
};

interface CustomFlatListProps extends Pick<FlatListProps<dataTypes>, "data"> {
  data: dataTypes[];
}

const CustomFlatList = (props: CustomFlatListProps) => {
  const { label, subLabelContainer } = styles;

  return (
    <FlatList
      {...props}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <>
          <Text style={label}>{item.title}</Text>
          {item.data.map((value, key) => (
            <View key={key} style={subLabelContainer}>
              <Text>{value.description}</Text>
              <Text>{value.value}</Text>
            </View>
          ))}
        </>
      )}
    />
  );
};

export default CustomFlatList;
