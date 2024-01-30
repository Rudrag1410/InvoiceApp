import { IconsType } from "assests/types";
import cx from "classnames";
import styles from "./button.module.scss";
import { getIcons } from "assests";

interface ButtonProps {
  variant?: "primary" | "danger" | "dark" | "light";
  classname?: string;
  children: React.ReactNode;
  icon?: IconsType;
  onClick: () => void;
}
const Button = ({
  classname,
  children,
  variant = "primary",
  onClick,
  icon,
}: ButtonProps): JSX.Element => {
  return (
    <div
      className={cx(
        styles.customBtn,
        {
          [styles.primary]: variant === "primary",
          [styles.danger]: variant === "danger",
          [styles.dark]: variant === "dark",
          [styles.light]: variant === "light",
        },
        classname
      )}
      onClick={onClick}
    >
      <div className={styles.btnContainer}>
        {getIcons(icon as IconsType)}
        {children}
      </div>
    </div>
  );
};

export default Button;
