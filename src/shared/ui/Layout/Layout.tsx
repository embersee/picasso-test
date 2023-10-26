import { type ReactNode } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import css from "./Layout.module.css";

type Props = {
  navbarSlot?: ReactNode;
  headerSlot: ReactNode;
  bottomSlot?: ReactNode;
};

export function Layout(props: Props) {
  return (
    <div className={css.root}>
      {props.navbarSlot}
      {props.headerSlot}
      <div className={css.container}>
        <div className={css.content}>
          <Outlet />
        </div>
      </div>
      <footer className={css.footer}>
        <div className="text_sm">{props.bottomSlot}</div>
      </footer>

      <ScrollRestoration />
    </div>
  );
}
