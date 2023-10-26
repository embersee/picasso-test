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
    <div className={css.root}>
      <div className={css.content}>
        <div className={cn(css.title, "text_base text_bold")}>
          {id} {title}
        </div>

        <div className={cn(css.description, "text_xs")}>{body}</div>
        <Link
          className={cn(css.preview_link, "text_xs")}
          to={`/post/${Post.id}`}
        >
          Просмотр
        </Link>
      </div>
    </div>
  );
}
