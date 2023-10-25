import cn from "classnames";
import { type ReactNode } from "react";

import css from "./PostList.module.css";
import { Post, PostCard } from "@/entities/post";

type Props<T extends Post> = {
  Posts: T[];
  isFetching?: boolean;
};

export function PostList<T extends Post>(props: Props<T>) {
  const { isFetching, Posts } = props;

  if (Boolean(isFetching) && Posts.length === 0) {
    return <div className={css.root}>Fetching...</div>;
  }

  return (
    <div className={cn(css.root, isFetching && css.rootIsFetching)}>
      {Posts.map((Post) => (
        <PostCard key={Post.id} Post={Post} />
      ))}
    </div>
  );
}
