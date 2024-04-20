import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from '../features/posts/postsSlice';
import { usersReducer } from '../features/users/usersSlice';
import { photosReducer } from '../features/photos/photosSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    photos: photosReducer,
  },
});
