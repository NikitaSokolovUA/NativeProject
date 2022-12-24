import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../firebase/config';

export const authRegistration = createAsyncThunk(
  'auth/registration',
  async ({ email, password, login }, thunkAPI) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: login,
      });

      const user = await auth.currentUser;

      return { username: user.displayName, uid: user.uid, email: user.email };
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const authSignIn = createAsyncThunk('auth/signIn', async ({ email, password }, thunkAPI) => {
  try {
    const userCredetials = await signInWithEmailAndPassword(auth, email, password);
    const user = await userCredetials.user;

    return { username: user.displayName, uid: user.uid, email: user.email };
  } catch (e) {
    thunkAPI.rejectWithValue(e.message);
  }
});

export const authSignOut = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
  try {
    signOut(auth);
  } catch (e) {
    thunkAPI.rejectWithValue(e.message);
  }
});

export const authStateChangeUser = createAsyncThunk('auth/stateChangeUser', async (_, thunkAPI) => {
  try {
    const user = await auth.currentUser;

    if (user !== null) {
      const credentials = await { username: user.displayName, uid: user.uid, email: user.email };
      return credentials;
    }
  } catch (e) {
    thunkAPI.rejectWithValue(e.message);
  }
});
