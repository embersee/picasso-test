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
  }),
});

export const { usePostsQuery, usePostDetailsQuery } = PostApi;
