import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  search: string;
  sort: string;
}

const initialState: FilterState = {
  search: "",
  sort: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    sortSelected: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    search: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { sortSelected, search } = filterSlice.actions;
