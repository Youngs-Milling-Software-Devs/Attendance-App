import {
  PayloadAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import loginReducer from "./reducers/hrmis/loginSlice";

const reducer = combineReducers({
  login: loginReducer,
});

const checkResetAction = (action: string) => {
  const actions = ["timeOut/reset", "timeIn/reset"];

  return actions.includes(action);
};

const rootReducer = (state: any, action: PayloadAction) => {
  if (checkResetAction(action.type)) {
    return reducer(undefined, action);
  }

  return reducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
