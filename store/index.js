import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../store/reducers/cartSlice";
import { combineReducers } from "redux";
import { createWrapper } from "next-redux-wrapper";

const rootReducer = combineReducers({
  cartSlice,
});

const makeStore = () =>
  configureStore({
    reducer: { rootReducer },
  });

export const wrapper = createWrapper(makeStore);
