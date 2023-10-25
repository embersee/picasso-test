import cn from "classnames";
import { useMemo } from "react";
import { type PostDetails as postDetailsType } from "@/entities/post";

import css from "./postDetails.module.css";

type Props = {
  postDetails?: postDetailsType;
  isFetching: boolean;
};

export function PostDetails({ postDetails, isFetching }: Props) {
  if (isFetching) {
    return <div className={css.root}>loading</div>;
  }

  if (!postDetails) {
    return null;
  }

  return (
    <div className={css.root}>
      <div className={css.content}>
        <div className="text_base text_bold">{postDetails.id}</div>
        <div className="text_2xl text_bold">{postDetails.title}</div>
        <div className="text_base text_bold">{postDetails.body}</div>
      </div>
    </div>
  );
}
