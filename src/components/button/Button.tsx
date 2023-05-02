import cx from "classnames";
import styles from "./button.module.scss";

export interface ButtonProps {
  label?: string;
  size: "small" | "large";
  color: "sand" | "red" | "green" | "yellow" | "blue";
  icon?: React.ReactNode;
  invisible: boolean;
}

const Button = ({ label, size = "small", color = "sand", icon }: ButtonProps) => {
  const hasIcon = Boolean(icon);
  const hasLabel = Boolean(label);

  return (
    <button className={cx(styles["button"], styles[size], styles[color], {[styles["has-icon"]]: hasIcon, [styles["no-label"]]: !hasLabel,} )}>
      {hasIcon && <span className={styles["icon"]}>{icon}</span>}
      {hasLabel && label}
    </button>
  );
};

export default Button;
