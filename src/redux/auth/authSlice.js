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
  extraReducers: {
    [authRegistration.fulfilled](state, { payload }) {
      state.userId = payload.uid;
      state.nickname = payload.username;
      state.email = payload.email;
      state.stateChange = true;
    },
    [authSignIn.fulfilled](state, { payload }) {
      state.userId = payload.uid;
      state.nickname = payload.username;
      state.email = payload.email;
      state.stateChange = true;
    },
    [authSignOut.fulfilled](state) {
      state.userId = null;
      state.nickname = null;
      state.email = null;
      state.stateChange = false;
    },
    [authStateChangeUser.fulfilled](state, { payload }) {
      state.userId = payload.uid;
      state.nickname = payload.username;
      state.email = payload.email;
      state.stateChange = true;
    },
  },
});

export const authReducer = authSlice.reducer;
