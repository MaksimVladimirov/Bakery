import { BakeryInfo } from 'src/types/bakery-info';

export const calcTotalPrice = (items: BakeryInfo[]) => {
  return items.reduce((acc, obj) => (acc += obj.price * (obj.count ? obj.count : 1)), 0);
};
