import { skipToken } from "@reduxjs/toolkit/dist/query";
import { type ReactNode } from "react";

import { useAppSelector } from "@/shared/model";
import { Logo } from "../Logo/Logo";
import css from "./LayoutHeader.module.css";

type Props = {
  rightContentSlot?: ReactNode;
};

export function LayoutHeader(props: Props) {
  return (
    <header className={css.root}>
      <Logo />
    </header>
  );
}
