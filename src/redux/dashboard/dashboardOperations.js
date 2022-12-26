import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase/config';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export const createPost = createAsyncThunk(
  'dashboard/createPost',
  async ({ title, location, imageUrl, userId }, thunkAPI) => {
    try {
      const postRef = await addDoc(collection(db, `posts`), {
        title,
        location,
        imageUrl,
        userId,
      });
      postId = await postRef.id;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchPosts = createAsyncThunk('dashboard/fetchPosts', async (_, thunkAPI) => {
  try {
    const postArr = [];
    const getRef = await getDocs(collection(db, 'posts'));

    getRef.forEach(doc => {
      postArr.push({ postId: doc.id, data: doc.data() });
    });

    return postArr;
  } catch (e) {
    thunkAPI.rejectWithValue(e.message);
  }
});
