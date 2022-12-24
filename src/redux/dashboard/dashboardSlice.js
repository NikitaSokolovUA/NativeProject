import { createSlice } from '@reduxjs/toolkit';
import { createPost, fetchPosts } from './dashboardOperations';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    posts: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
  extraReducers: {
    [fetchPosts.fulfilled](state, action) {
      state.posts.items = action.payload;
    },
    // [createPost.fulfilled](state, { payload }) {
    //   state.post.items.push({ payload });
    // },
  },
});

export const dashboardReducer = dashboardSlice.reducer;
