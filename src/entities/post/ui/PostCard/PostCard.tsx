import cn from "classnames";

import { Link } from "react-router-dom";

import { type Post } from "../../model/types";
import css from "./PostCard.module.css";

type Props = {
  Post: Post;
};

export function PostCard(props: Props) {
  const { Post } = props;
  const { id, title, body } = Post;

  return (
    <Link to={`/post/${Post.id}`}>
      <div className={css.content}>
        <div className={cn(css.title, "text_base")}>{id}</div>
        <div className={cn(css.title, "text_base")}>{title}</div>
        <div className={cn(css.label, "text_xs")}>{body}</div>
      </div>
    </Link>
  );
}
