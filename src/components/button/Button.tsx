import cx from "classnames";
import styles from "./button.module.scss";

export interface ButtonProps {
  label: string;
  size: "small" | "large" | undefined;
  color: "sand" | "red" | "green" | "yellow" | "blue" | undefined;
}

const Button = ({ label, size = "small", color = "sand" }: ButtonProps) => {
  return (
    <button className={cx(styles.button, styles[size], styles[color])}>
      {label}
    </button>
  );
};

export default Button;
