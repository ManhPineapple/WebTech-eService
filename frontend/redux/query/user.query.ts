import { createApi } from '@reduxjs/toolkit/query/react';
import { TResponse } from 'src/types/response.types';
import baseQuery from '../app/baseQuery';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQuery,
  tagTypes: ['Users'],
  keepUnusedDataFor: 600,
  endpoints: (builder) => ({
    getUserInfo: builder.query<TResponse, any> ({
      query: () => ({
        url: `/user/info`,
        method: 'get',
      }),
    })
  }),
});
export const {
  useGetUserInfoQuery
} = userApi;
