import css from "./LayoutHeader.module.css";
import cn from "classnames";

export function LayoutHeader() {
  return (
    <header className={css.root}>
      Picasso-test by{" "}
      <a
        href="https://t.me/embersee"
        className={cn(css.creator, "creator")}
        target="_blank"
      >
        Philipp S
      </a>
    </header>
  );
}
