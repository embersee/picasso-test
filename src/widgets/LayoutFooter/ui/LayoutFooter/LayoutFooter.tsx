import css from "./LayoutFooter.module.css";
import cn from "classnames";

export function LayoutFooter() {
  return (
    <footer className={css.root}>
      made by{" "}
      <a
        href="https://t.me/embersee"
        className={cn(css.creator, "creator")}
        target="_blank"
      >
        Philipp S.
      </a>{" "}
      <a href="https://github.com/embersee/picasso-test" target="_blank">
        view source
      </a>
    </footer>
  );
}
