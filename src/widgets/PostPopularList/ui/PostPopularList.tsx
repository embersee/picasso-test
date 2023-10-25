import { PostList } from "@/widgets/PostList";
import css from "./PostPopularList.module.css";
import { usePostsQuery } from "@/entities/post/api/postApi";

export function PostPopularList() {
  const { data = [], isFetching } = usePostsQuery();

  if (data.length < 1) {
    return null;
  }

  return (
    <div className={css.root}>
      <h2>Featured Posts</h2>
      <PostList isFetching={isFetching} Posts={data} />
    </div>
  );
}
