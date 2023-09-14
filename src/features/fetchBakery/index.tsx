import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bakeryApi = createApi({
  reducerPath: 'bakeryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6436da148205915d34fe9ac0.mockapi.io' }),
  endpoints: (builder) => ({
    fetchBakery: builder.query({
      query: () => 'bakery',
    }),
  }),
});

export const { useFetchBakeryQuery } = bakeryApi;
