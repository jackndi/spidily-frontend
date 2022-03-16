import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../../config";

export const tokenAPI = createApi({
  reducerPath: "tokenAPI",
  baseQuery: fetchBaseQuery({ baseUrl: config.BASE_URL }),
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
