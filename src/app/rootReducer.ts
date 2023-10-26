import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "@/shared/api";
import { pageSlice } from "@/entities/post/model/slice";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [pageSlice.name]: pageSlice.reducer,
});
