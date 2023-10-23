import { configureStore } from '@reduxjs/toolkit';
import { bakeryApi } from 'src/features/fetch-bakery/fetchBakery';
import userReducer from '../../features/userSlice/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [bakeryApi.reducerPath]: bakeryApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(bakeryApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
