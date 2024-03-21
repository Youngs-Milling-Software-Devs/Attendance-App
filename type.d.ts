/// <reference types="nativewind/types" />

// import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type HomeStackNavigatorParamlist = {
  Login: undefined;
  Dtr: undefined;
};

export type HomeScreenNavigationProp = NativeStackScreenProps<
  HomeStackNavigatorParamlist,
  Login,
  Dtr
>;
