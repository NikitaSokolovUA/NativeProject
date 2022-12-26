import { createSlice } from '@reduxjs/toolkit';
import { authRegistration, authSignIn, authSignOut, authStateChangeUser } from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userId: null,
    nickname: null,
    stateChange: false,
    email: null,
  },
  extraReducers: builder => {
    builder
      .addCase(authRegistration.fulfilled, (state, { payload }) => {
        state.userId = payload.uid;
        state.nickname = payload.username;
        state.email = payload.email;
        state.stateChange = true;
      })
      .addCase(authSignIn.fulfilled, (state, { payload }) => {
        state.userId = payload.uid;
        state.nickname = payload.username;
        state.email = payload.email;
        state.stateChange = true;
      })
      .addCase(authSignOut.fulfilled, state => {
        state.userId = null;
        state.nickname = null;
        state.email = null;
        state.stateChange = false;
      })
      .addCase(authStateChangeUser.fulfilled, (state, { payload }) => {
        state.userId = payload.uid;
        state.nickname = payload.username;
        state.email = payload.email;
        state.stateChange = true;
      });
  },
});

export const authReducer = authSlice.reducer;
