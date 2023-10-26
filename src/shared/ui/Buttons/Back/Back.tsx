import cn from "classnames";
import { useNavigate } from "react-router-dom";
import css from "./Back.module.css";

export function Back() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className={cn(css.back_button, "text_lg")}
      onClick={() => navigate(-1)}
    >
      Назад
    </button>
  );
}
