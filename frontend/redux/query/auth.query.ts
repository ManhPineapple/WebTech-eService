import { createApi } from '@reduxjs/toolkit/query/react';
import { TResponse } from '../../types/response.types';
import baseQuery from '../app/baseQuery';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery,
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    login: builder.mutation<TResponse<{refresh_token: string}>, any>({
      query: (data) => ({
        url: `/auth/pipcar/agency/login`,
        method: 'post',
        data
      }),
      invalidatesTags: ['Auth'],
    }),
    logout: builder.mutation<TResponse<any>, void>({
      query: () => ({
        url: '/auth/pipcar/agency/logout',
        method: 'get',
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});
export const { useLoginMutation, useLogoutMutation } = authApi;
