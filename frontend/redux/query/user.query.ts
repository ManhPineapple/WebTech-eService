import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '../app/baseQuery';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQuery,
  tagTypes: ['Users'],
  keepUnusedDataFor: 600,
  endpoints: (builder) => ({
    
  }),
});
export const {

} = userApi;
