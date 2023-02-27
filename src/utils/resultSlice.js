import { createSlice } from "@reduxjs/toolkit";

const resultsSlice = createSlice({
  name: "results",
  initialState: {
    isSearched: false,
    searchQuery: null,
  },
  reducers: {
    searchedFor: (state, action) => {
      state.isSearched = true;
      state.searchQuery = action.payload;
    },
  },
});

export const { searchedFor } = resultsSlice.actions;
export default resultsSlice.reducer;