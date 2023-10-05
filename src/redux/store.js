
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Slices/userSlice';
import jobSlice from './Slices/jobSlice';


export const store = configureStore({
  reducer: {
    auth: userSlice,
    jobs:jobSlice
  },
});