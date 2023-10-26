import {
  type PayloadAction,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";

type PageSliceState = {
  currentPage: number;
};

const initialState: PageSliceState = {
  currentPage: 1,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    increment: (state) => {
      state.currentPage += 1;
    },
  },
});

export const selectCurrentPage = (state: RootState) => state.page.currentPage;

export const { increment } = pageSlice.actions;
