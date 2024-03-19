import { useState } from "react";
import { StatusBar, StatusBarStyle, Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <Text> First View </Text>
      <StatusBar
        backgroundColor="maroon"
        barStyle="light-content"
        showHideTransition="slide"
      />
    </View>
  );
}
