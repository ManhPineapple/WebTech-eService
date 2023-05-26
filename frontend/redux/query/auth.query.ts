import { createApi } from '@reduxjs/toolkit/query/react';
import { TUser } from 'src/types/user.types';
import { TResponse } from '../../types/response.types';
import baseQuery from '../app/baseQuery';

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
    loginFacebook: builder.mutation<TResponse, any>({
      query: () => ({
        url: '/auth/facebook',
        method: 'get',
      })
    }),
    logout: builder.mutation<TResponse<any>, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'get',
      }),
      invalidatesTags: ['Auth'],
    }),
    register: builder.mutation<TResponse, {data: TUser}>({
      query: (data) => ({
        url: `/auth/register`,
        method: 'post',
        data,
      }),
    }),
  }),
});
export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useLoginFacebookMutation } = authApi;
