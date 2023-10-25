import { skipToken } from "@reduxjs/toolkit/dist/query";
import { Link, useParams } from "react-router-dom";
import { type PostId } from "@/entities/post";
import { usePostDetailsQuery } from "@/entities/post/api/postApi";
import { PostDetails } from "@/widgets/PostDetails";

export function PostPage() {
  const { postId } = useParams<{ postId: string }>();

  const { data, isFetching } = usePostDetailsQuery(
    postId ? (Number.parseInt(postId, 10) as PostId) : skipToken,
    { skip: !postId }
  );

  const isNotFound = !postId || (!isFetching && !data);

  if (isNotFound) {
    return (
      <div>
        post not found, go to <Link to="/">main page</Link>
      </div>
    );
  }

  return <PostDetails postDetails={data} isFetching={isFetching} />;
}
