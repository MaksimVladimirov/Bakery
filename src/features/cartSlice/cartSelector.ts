import { RootState } from 'src/types/root-state/rootState';

export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;
export const selectProducts = (state: RootState) => state.cart.items;
