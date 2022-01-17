import styles from "./Button.module.scss";
import clsx from "clsx";

export default function Button({ type, children }) {
  return (
    <button
      className={clsx([
        styles["btn"],
        type === "primary" && styles["btn-primary"],
        type === "secondary" && styles["btn-secondary"],
      ])}
    >
      {children}
    </button>
  );
}
