import { createSlice } from '@reduxjs/toolkit';
import { calcTotalPrice } from 'src/app/utils/calcTotalPrice';
import { BakeryInfo } from 'src/types/bakery-info';

export interface CartSliceState {
  items: BakeryInfo[];
  totalPrice: number;
}

const initialState: CartSliceState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem?.count) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action) {
      state.items = state.items.filter((object) => object.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem?.count) {
        if (findItem?.count > 0) {
          findItem.count--;
          state.totalPrice = calcTotalPrice(state.items);
        }
      }
    },
    plusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem?.count) {
        findItem.count++;
        state.totalPrice = calcTotalPrice(state.items);
      }
    },
  },
});

export const { addItem, clearItems, minusItem, removeItem, plusItem } = cartSlice.actions;
export default cartSlice.reducer;
