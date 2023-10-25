import { type ReactNode } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import css from "./Layout.module.css";

type Props = {
  navbarSlot?: ReactNode;
  headerSlot: ReactNode;
  bottomSlot?: ReactNode;
  announcementSlot?: ReactNode;
  sidebarSlot?: ReactNode;
};

export function Layout(props: Props) {
  return (
    <div className={css.root}>
      {props.announcementSlot}
      {props.navbarSlot}
      {props.headerSlot}
      <div className={css.container}>
        <div className={css.content}>
          <Outlet />
        </div>
        {props.sidebarSlot && (
          <aside className={css.sidebar}>{props.sidebarSlot}</aside>
        )}
      </div>
      <footer className={css.footer}>
        <div className="text_sm"></div>
      </footer>
      {props.bottomSlot}
      <ScrollRestoration />
    </div>
  );
}
