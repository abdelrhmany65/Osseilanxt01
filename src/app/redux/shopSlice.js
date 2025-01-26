import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  selectedCategory: 'All',
  searchTerm: '',
  sortType: 'price-asc',
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
  },
});

export const { setProducts, setSelectedCategory, setSearchTerm, setSortType } = shopSlice.actions;

export default shopSlice.reducer;
