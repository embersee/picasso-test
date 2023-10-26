import { PostList } from "@/widgets/PostList";
import css from "./PostPopularList.module.css";
import { usePostsInfiniteQuery } from "@/entities/post/api/postApi";
import { useEffect } from "react";
import { increment, selectCurrentPage } from "@/entities/post/model/slice";

import { useAppDispatch } from "@/shared/model";
import { useAppSelector } from "@/shared/model/hooks";

export function PostPopularList() {
  const currentPage = useAppSelector(selectCurrentPage);
  const dispatch = useAppDispatch();

  const { data = [], isFetching } = usePostsInfiniteQuery(currentPage);

  if (data.length < 1) {
    return <div> no posts found!</div>;
  }

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        dispatch(increment());
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [currentPage, isFetching]);

  return (
    <div className={css.root}>
      <h2>Featured Posts</h2>
      <PostList isFetching={isFetching} Posts={data} />
    </div>
  );
}
