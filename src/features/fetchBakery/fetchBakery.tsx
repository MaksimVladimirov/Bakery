import ky from 'ky';
import { makeAutoObservable, runInAction } from 'mobx';
import { BakeryInfo } from 'src/types/bakery-info/bakeryInfo';

class FetchBakery {
  bakeryData: BakeryInfo[] = [];
  isLoading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchBakery() {
    this.isLoading = true;
    this.error = null;

    try {
      const response = await ky.get('https://6436da148205915d34fe9ac0.mockapi.io/bakery');
      const data = (await response.json()) as BakeryInfo[];
      runInAction(() => {
        this.bakeryData = data;
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = error as null;
        this.isLoading = false;
      });
    }
  }
}

const fetchBakery = new FetchBakery();

export default fetchBakery;
