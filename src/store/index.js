import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// You only ever have one store, even if you have mutliple slices
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
