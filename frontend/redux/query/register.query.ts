import { createApi } from '@reduxjs/toolkit/query/react';
import { TUser } from 'src/types/user.types';
import { TResponse } from '../../types/response.types';
import baseQuery from '../app/baseQuery';

export const registerApi = createApi({
  reducerPath: 'registerApi',
  baseQuery: baseQuery,
  tagTypes: ['Registers'],
  keepUnusedDataFor: 600,
  endpoints: (builder) => ({
    register: builder.mutation<TResponse, {data: TUser}>({
      query: (data) => ({
        url: `/auth/register`,
        method: 'post',
        data,
      }),
    }),
  }),
});
export const {
  useRegisterMutation,
} = registerApi;
