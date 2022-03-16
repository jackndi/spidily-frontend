import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tokenAPI = createApi({
  reducerPath: "tokenAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    retrieveToken: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (body) => ({
        url: `api/token`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRetrieveTokenMutation } = tokenAPI;
