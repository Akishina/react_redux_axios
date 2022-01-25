import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://blog-api.meika.xyz/api/post/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", `application/json`);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchPosts: builder.query({
      query: () => "public",
    }),
    getPost: builder.query({
      query: (slug) => `slug/${slug}`,
      transformResponse: (response, meta, arg) => response.data,
    }),
  }),
});

export const { useSearchPostsQuery, useGetPostQuery } = postApi;
