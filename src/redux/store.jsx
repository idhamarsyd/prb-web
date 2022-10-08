import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "./patientReducer";
import loginReducer from "./loginReducer";

export const store = configureStore({
  reducer: {
    patient: patientReducer,
    login: loginReducer,
  },
});
