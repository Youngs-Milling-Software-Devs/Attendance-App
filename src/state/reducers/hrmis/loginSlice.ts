import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usermanagementAPI from "./../../../api/usermanagement";
import { APIResponse } from "../../../types/generic";
import { InitialStates, isPayload } from "./../../../types/state";
import { AxiosError } from "axios";
import { IEmployee } from "../../../types/employee";
import { RootState } from "../../store";
import jwtDecode from "jwt-decode";
import { getSecureValue, setSecureValue } from "../../../lib/SecureStore";

export interface Credentials {
  username?: string;
  password?: string;
  access?: string | IEmployee; //@type access represent as a token authorize sent from server
  refresh?: string;
}

const initialState: InitialStates<Credentials> = {
  data: { username: "", password: "" },
  isLoading: false,
  isError: undefined,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        return { ...state, isLoading: true };
      })

      .addCase(loginAsync.fulfilled, (state, action) => {
        if (isPayload(action.payload)) {
          const { username, password, ...data } = action.payload.data;

          if (data.access && typeof data.access === "string") {
            setSecureValue("accessToken", data.access);
            const access = jwtDecode<IEmployee>(data.access);
            const { message } = action.payload;

            return {
              ...state,
              message,
              data: { access },
              isSuccess: true,
              isError: false,
              isLoading: false,
            };
          }
        }

        return state;
      })

      .addCase(loginAsync.rejected, (state, action) => {
        console.log("rejected", state, action);

        return state;
      });
  },
});

export const loginAsync = createAsyncThunk(
  "login",
  async (values: Credentials) => {
    try {
      const response = await usermanagementAPI.post<APIResponse<Credentials>>(
        "/auth/login",
        values
      );

      return response.data;
    } catch (error) {
      const err = error as AxiosError<APIResponse<Credentials>>;

      return err;
    }
  }
);

export const selectUser = (store: RootState) => store.login;

export default loginSlice.reducer;
