import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      const category = action.payload;
      if (!state.find((fav) => fav.id === category.id)) {
        state.push(category);
      }
    },
    removeFavorite: (state, action) => {
      const categoryId = action.payload;
      return state.filter((fav) => fav.id !== categoryId);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;