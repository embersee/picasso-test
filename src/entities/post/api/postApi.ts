import { baseApi } from "@/shared/api";

import { type Post, type PostDetails, type PostId } from "../model/types";
import { type PostDto } from "./types";
import { mapPost } from "../lib/mapPosts";
import { mapPostDetails } from "../lib/mapPostDetails";

export const PostApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    Posts: build.query<Post[], { start: number; limit: number }>({
      query: ({ start, limit }) => ({
        url: `/posts?_start=${start}&_limit=${limit}`,
      }),
      transformResponse: (response: PostDto[]) => response.map(mapPost),
    }),
    PostDetails: build.query<PostDetails, PostId>({
      query: (PostId) => ({
        url: `/posts/${PostId}`,
      }),
      transformResponse: (response: PostDto) => mapPostDetails(response),
    }),
    PostsInfinite: build.query<Post[], { start: number; limit: number }>({
      query: ({ start, limit }) => ({
        url: `/posts?_start=${start}&_limit=${limit}`,
      }),
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },

      // transformResponse: (response: PostDto[]) => response.map(mapPost),
    }),
  }),
});

export const { usePostsQuery, usePostDetailsQuery, usePostsInfiniteQuery } =
  PostApi;
