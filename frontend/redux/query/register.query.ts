import { createApi } from '@reduxjs/toolkit/query/react';
import { TResponse } from '../../types/response.types';
import baseQueryWithReauth from '../app/baseQueryWithReauth';
import { TUser } from 'src/types/user.types';

export const registerApi = createApi({
  reducerPath: 'registerApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Registers'],
  keepUnusedDataFor: 600,
  endpoints: (builder) => ({
    agencyRegister: builder.mutation<TResponse, {data: TUser}>({
      query: (data) => ({
        url: `/register`,
        method: 'post',
        data,
      }),
      invalidatesTags: [],
    }),
  }),
});
export const {
  useAgencyRegisterMutation,
} = registerApi;
