import {
  type PayloadAction,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";

type PageSliceState = {
  currentPage: number;
};

const initialState: PageSliceState = {
  currentPage: 0,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    increment: (
      state,
      action: PayloadAction<{ increment: number; total: number }>
    ) => {
      if (state.currentPage >= action.payload.total) return;

      state.currentPage += action.payload.increment;
    },
  },
});

export const selectCurrentPage = (state: RootState) => state.page.currentPage;

export const { increment } = pageSlice.actions;
