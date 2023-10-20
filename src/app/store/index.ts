import { configureStore } from '@reduxjs/toolkit';
import { bakeryApi } from 'src/features/fetch-bakery/fetchBakery';
import userReducer from '../../features/userSlice/userSlice';
import cartReducer from '../../features/cartSlice/cartSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [bakeryApi.reducerPath]: bakeryApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(bakeryApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
