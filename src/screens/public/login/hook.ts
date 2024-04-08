import { HomeScreenNavigationProp } from "../../../../type";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import {
  Credentials,
  loginAsync,
  selectUser,
} from "../../../state/reducers/hrmis/loginSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../state/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getSecureValue } from "../../../lib/SecureStore";
import { EPublicScreen } from "../../../constants/enums";

export const useHooks = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const { isSuccess, message } = useSelector(selectUser);

  const {
    reset,
    control,
    handleSubmit: handleFormSubmit,
    getValues,
  } = useForm<Credentials>({
    defaultValues: {},
  });

  const handleSubmit = () => {
    const { username, password } = getValues();

    dispatch(loginAsync({ username, password }));
  };

  useEffect(() => {
    console.log("reduxResponse", isSuccess, message);

    isSuccess && navigation.navigate(EPublicScreen.BOTTOM_NAVIGATOR);
    reset();
  }, [message]);

  return { navigation, control, handleSubmit, handleFormSubmit };
};
