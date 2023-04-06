import { createApi } from '@reduxjs/toolkit/query/react';
import { TBaseFilter } from '../../types/global.types';
import { TResponse } from '../../types/response.types';
import { TUser } from '../../types/user.types';
import baseQueryWithReauth from '../app/baseQueryWithReauth';

export type TListFilter = TBaseFilter & {
  status?: number;
};

export type TUpdateUserInfoByIdData = Pick<TUser, 'name' | 'phone'> & {
  password?: string;
};

export type TCreateUserData = Pick<TUser, 'name' | 'phone' | 'role'> & {
  password?: string;
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Users'],
  keepUnusedDataFor: 600,
  endpoints: (builder) => ({
    getCurrentUser: builder.query<TResponse<{ user_detail: TUser }>, { rt: boolean }>({
      query: () => ({ url: '/auth/pip/user/me', method: 'get' }),
      providesTags: (result) =>
        result?.data?.user_detail._id
          ? [
              { type: 'Users', id: result?.data?.user_detail._id },
              { type: 'Users', id: 'ME' },
            ]
          : [{ type: 'Users', id: 'LIST' }],
      extraOptions: {},
    }),
  }),
});
export const {
  useGetCurrentUserQuery,
} = userApi;
