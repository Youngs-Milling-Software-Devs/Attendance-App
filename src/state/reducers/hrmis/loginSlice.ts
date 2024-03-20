import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usermanagementAPI from "./../../../api/usermanagement";
import { APIResponse } from "../../../types/generic";
import { InitialStates } from "./../../../types/state";
import { AxiosError } from "axios";

export interface Credentials {
  username?: string;
  password?: string;
  // access?: string | IEmployee; //@type access represent as a token authorize sent from server
  // refresh?: string;
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
        console.log("fulfilled", state, action);

        return state;
      })

      .addCase(loginAsync.rejected, (state, action) => {
        console.log("rejected", state, action);

        return state;
      });
  },
});

export const loginAsync = createAsyncThunk("login", async (values: any) => {
  try {
    console.log("process");
  } catch (error) {
    const err = error as AxiosError<APIResponse<Credentials>>;

    return err;
  }
});

export default loginSlice.reducer;
