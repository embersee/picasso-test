import cn from "classnames";

import { Link } from "react-router-dom";

import { type Post } from "../../model/types";
import css from "./PostCard.module.css";

type Props = {
  post: Post;
  style: React.CSSProperties;
};

export function PostCard({ post, style }: Props) {
  const { id, title, body } = post;

  return (
    <div className={css.root} style={style}>
      <div className={css.content}>
        <div className={cn(css.title, "text_base text_bold")}>
          {id} {title}
        </div>

        <div className={cn(css.description, "text_xs")}>{body}</div>
        <Link className={cn(css.preview_link, "text_xs")} to={`/post/${id}`}>
          Просмотр
        </Link>
      </div>
    </div>
  );
}
