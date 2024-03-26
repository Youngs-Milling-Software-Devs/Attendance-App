import { Text, View } from "react-native";
import { useHooks } from "./hook";
import { styles } from "./style";
import CustomFlatList from "../../../components/FlatList";
import { useState } from "react";
import { RadioButton } from "react-native-paper";
import CustomDropdown from "../../../components/Dropdown";

export const CompensationScreen = () => {
  const {
    data,
    selectedItem,
    setSelectedItem,
    visible,
    setVisible,
    checked,
    setChecked,
    items,
  } = useHooks();

  const {
    container,
    filterContainer,
    header,
    subHeader,
    labelHeader,
    labelSubHeader,
    dropDownContainer,
    cutOffContainer,
  } = styles;

  return (
    <View style={container}>
      <View style={filterContainer}>
        <View style={dropDownContainer}>
          <CustomDropdown
            label="Select Month"
            mode="outlined"
            list={items}
            visible={visible}
            value={selectedItem}
            setValue={setSelectedItem}
            onDismiss={() => setVisible(false)}
            showDropDown={() => setVisible(true)}
          />
        </View>
        <View style={cutOffContainer}>
          <RadioButton.Item
            label="1st"
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <RadioButton.Item
            label="2nd"
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
        </View>
      </View>

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
