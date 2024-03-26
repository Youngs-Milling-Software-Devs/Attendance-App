import { useState } from "react";
import { Text, View, FlatList, FlatListProps } from "react-native";
import { Icon, IconButton } from "react-native-paper";
import Dropdown, { DropDownPropsInterface } from "react-native-paper-dropdown";

const CustomDropdown = (props: DropDownPropsInterface) => {
  return <Dropdown {...props} />;
};

export default CustomDropdown;
