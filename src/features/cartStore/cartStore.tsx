import { makeAutoObservable } from 'mobx';
import { BakeryInfo } from 'src/types/bakery-info/bakeryInfo';
import { calcTotalPrice } from '../../app/utils/calcTotalPrice';

class CartStore {
  items: BakeryInfo[] = [];
  totalPrice: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  addItem(item: BakeryInfo) {
    const findItem = this.items.find((obj) => obj.id === item.id);
    if (findItem) {
      findItem.count = (findItem.count || 0) + 1;
    } else {
      this.items.push({ ...item, count: 1 });
    }
    this.totalPrice = calcTotalPrice(this.items);
  }

  removeItem = (item: BakeryInfo) => {
    this.items = this.items.filter((object) => object.id !== item.id);
    this.totalPrice = calcTotalPrice(this.items);
  };

  clearItems = () => {
    this.items = [];
    this.totalPrice = 0;
    this.totalPrice = calcTotalPrice(this.items);
  };

  minusItem = (item: BakeryInfo) => {
    const findItem = this.items.find((obj) => obj.id === item.id);
    if (findItem) {
      findItem.count = (findItem.count || 0) - 1;
      this.totalPrice = calcTotalPrice(this.items);
    }
  };

  plusItem = (item: BakeryInfo) => {
    const findItem = this.items.find((obj) => obj.id === item.id);
    if (findItem) {
      findItem.count = (findItem.count || 0) + 1;
      this.totalPrice = calcTotalPrice(this.items);
    }
  };
}

const cartStore = new CartStore();
export default cartStore;
