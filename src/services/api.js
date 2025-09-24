import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../helpers/helper';

// Define API
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  keepUnusedDataFor: 0, // apply to all endpoints
  endpoints: (builder) => ({
    getMyData: builder.query({
        query: () => '/users',   // GET /users
        keepUnusedDataFor: 0,   // disables cache
    }),
  }),
});

// Export the auto-generated hook
// Object Destructuing.....
export const { useGetMyDataQuery } = api;
