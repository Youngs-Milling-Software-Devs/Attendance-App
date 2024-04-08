import * as SecureStore from "expo-secure-store";

type SecureKey = "accessToken" | "refreshToken";

export const setSecureValue = async (key: SecureKey, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

export const getSecureValue = async (key: string) => {
  return await SecureStore.getItemAsync(key);
};
