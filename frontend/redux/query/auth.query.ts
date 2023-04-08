import { createApi } from '@reduxjs/toolkit/query/react';
import { TResponse } from '../../types/response.types';
import baseQuery from '../app/baseQuery';
import { TUser } from 'src/types/user.types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery,
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    login: builder.mutation<TResponse<TUser>, any>({
      query: (data) => ({
        url: `/auth/login`,
        method: 'post',
        data
      }),
      invalidatesTags: ['Auth'],
    }),
    logout: builder.mutation<TResponse<any>, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'get',
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});
export const { useLoginMutation, useLogoutMutation } = authApi;
