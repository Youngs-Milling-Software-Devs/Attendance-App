import * as SecureStore from "expo-secure-store";

export const setSecureValue = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

export const getSecureValue = async (key: string) => {
  return await SecureStore.getItemAsync(key);
};
