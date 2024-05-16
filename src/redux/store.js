import { configureStore } from '@reduxjs/toolkit';
import clickSlice from './slice/clickSlice';

export default configureStore({
  reducer: {
    clicks: clickSlice,
  },
});
