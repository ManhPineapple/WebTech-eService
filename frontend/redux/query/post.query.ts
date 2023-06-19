import { createApi } from '@reduxjs/toolkit/query/react';
import { TResponse } from '../../types/response.types';
import baseQuery from '../app/baseQuery';

export const postApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery,
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getAllPost: builder.query<TResponse, any> ({
      query: (data) => ({
        url: `/forum/getpost`,
        method: 'get',
        data
      }),
      providesTags: ['Post'],
    }),
    createPost: builder.mutation<TResponse, any> ({
      query: (data) => ({
        url: `/forum/createpost`,
        method: 'post',
        data,
        formData: true,
      }),
      invalidatesTags: ['Post']
    })
  }),
});

export const {
  useGetAllPostQuery,
  useCreatePostMutation
} = postApi