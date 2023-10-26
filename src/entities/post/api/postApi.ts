import { baseApi } from "@/shared/api";

import { type Post, type PostDetails, type PostId } from "../model/types";
import { type PostDto } from "./types";
import { mapPost } from "../lib/mapPosts";
import { mapPostDetails } from "../lib/mapPostDetails";

export const PostApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    Posts: build.query<Post[], void>({
      query: () => ({
        url: `/posts`,
      }),
      transformResponse: (response: PostDto[]) => response.map(mapPost),
    }),
    PostDetails: build.query<PostDetails, PostId>({
      query: (PostId) => ({
        url: `/posts/${PostId}`,
      }),
      transformResponse: (response: PostDto) => mapPostDetails(response),
    }),
    PostsInfinite: build.query<Post[], number>({
      query: (page) => ({ url: `/posts?_page=${page}&_limit=20` }),
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
    }),
  }),
});

export const { usePostsQuery, usePostDetailsQuery, usePostsInfiniteQuery } =
  PostApi;
