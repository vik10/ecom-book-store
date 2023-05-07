import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    allBooksData: [],
    selectedBooks: [],
    sortOrder: "ASC",
    filterValue: "",
  },
  reducers: {
    handleAllBooksData: (state, action) => {
      state.allBooksData = action.payload;
    },
    addToCart: (state, action) => {
      state.selectedBooks = state.selectedBooks.concat(action.payload);
    },
    removeFromCart: (state, action) => {
      state.selectedBooks = state.selectedBooks.filter(
        (item) => item.id != action.payload.id
      );
    },
    handleSorting: (state, action) => {
      state.sortOrder = action.payload;
    },
    handleFilter: (state, action) => {
      state.filterValue = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  handleSorting,
  handleFilter,
  handleAllBooksData,
} = cartSlice.actions;
export default cartSlice.reducer;
