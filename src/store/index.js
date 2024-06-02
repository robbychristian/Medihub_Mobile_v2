import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/User";

export const combinedReducers = combineReducers({
  auth: authSlice.reducer,
});

const rootReducer = (state, action) => {
  return combinedReducers(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});
