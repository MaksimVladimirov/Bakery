import { describe, test, expect } from 'vitest';
import cartStore from './store';
import { calcTotalPrice } from '../utils/calcTotalPrice';

describe('Cartstore тест', () => {
  const itemToAdd = {
    id: 2,
    name: 'Булка с малиной',
    price: 420,
    bestseller: false,
    count: 1,
    img: 'https://www.gastronom.ru/binfiles/images/20171102/b65d30ca.jpg',
  };

  test('Тест на добавление элемента', () => {
    expect(cartStore.items).toEqual([]);
    expect(cartStore.totalPrice).toEqual(0);

    cartStore.addItem(itemToAdd);

    expect(cartStore.items).toContainEqual({
      ...itemToAdd,
      count: 1,
    });

    expect(cartStore.totalPrice).toEqual(calcTotalPrice([...cartStore.items]));
  });

  test('Тест на плюс количества элемента', () => {
    cartStore.plusItem(itemToAdd);
    expect(cartStore.items).toContainEqual({
      ...itemToAdd,
      count: 2,
    });

    expect(cartStore.totalPrice).toEqual(calcTotalPrice([...cartStore.items]));
  });

  test('Тест на минус количества элемента', () => {
    cartStore.minusItem(itemToAdd);

    expect(cartStore.items).toContainEqual({
      ...itemToAdd,
      count: 1,
    });

    expect(cartStore.totalPrice).toEqual(calcTotalPrice([...cartStore.items]));
  });

  test('Тест на очистку всех элементов', () => {
    cartStore.clearItems();
    expect(cartStore.items).toEqual([]);
  });
});
