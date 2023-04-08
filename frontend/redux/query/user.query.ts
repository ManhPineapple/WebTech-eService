import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithReauth from '../app/baseQueryWithReauth';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Users'],
  keepUnusedDataFor: 600,
  endpoints: (builder) => ({
    
  }),
});
export const {

} = userApi;
