import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from './dashboardOperations';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    posts: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts.items = action.payload;
    });
  },
});

export const dashboardReducer = dashboardSlice.reducer;
