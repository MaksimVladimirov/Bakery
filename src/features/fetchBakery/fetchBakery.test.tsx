import { describe, test, expect } from 'vitest';
import bakeryStore from './fetchBakery';

describe('Тест ', () => {
  const items = [
    {
      name: 'Миндальный круассан',
      price: 480,
      id: 0,
      bestseller: true,
      img: '//static.1000.menu/res/640/img/content-v2/4f/8c/49428/mindalnyi-kruassan_1616862495_11_max.jpg',
    },
    {
      name: 'Французский круассан',
      price: 340,
      id: 1,
      bestseller: false,
      img: 'https://img.vkusvill.ru/pim/images/site_BigWebP/0aa7668a-62dc-4962-ad8a-b414fba2795e.webp?1659043993.3612',
    },
    {
      name: 'Булка с малиной',
      price: 420,
      id: 2,
      bestseller: false,
      img: 'https://www.gastronom.ru/binfiles/images/20171102/b65d30ca.jpg',
    },
    {
      name: 'Улитка с изюмом',
      price: 360,
      id: 3,
      bestseller: true,
      img: 'https://eda.ru/img/eda/c620x415/s1.eda.ru/StaticContent/Photos/120214125404/120214125539/p_O.jpg',
    },
    {
      name: 'Булка с персиком',
      price: 460,
      id: 4,
      bestseller: false,
      img: 'https://hlebopechka.ru/images/radi/3d34872802b1.jpg',
    },
    {
      name: 'Булка с шоколадом',
      price: 380,
      id: 5,
      bestseller: true,
      img: '//static.1000.menu/res/640/img/content-v2/73/31/14288/bulochki-s-shokoladom-iz-drojjevogo-testa_1633678587_44_max.jpg',
    },
  ];

  test('Получение товаров', async () => {
    await bakeryStore.fetchBakery();
    expect(bakeryStore.bakeryData).toEqual(items);
    expect(bakeryStore.isLoading).toEqual(false);
  });
});
