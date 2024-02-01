import cx from "classnames";
import { ButtonProps, Variant } from "./types";
import styles from "./button.module.scss";

import { getIcons } from "assests";

const Button = ({
  onClick,
  variant = Variant.Primary,
  children,
  icon,
  size,
  className,
  ...rest
}: ButtonProps): JSX.Element => {
  const classNames = {
    [styles.isPaddingAllowed]: icon,
    [styles.justifyContentAllowed]: !icon,
    [styles.extraLarge]: size === "extraLarge",
    [styles.largeSize]: size === "large",
    [styles.mediumSize]: size === "medium",
    [styles.smallSize]: size === "small",
    [styles.primary]: variant === "primary",
    [styles.secondary]: variant === "secondary",
    [styles.teritiary]: variant === "teritiary",
    [styles.red]: variant === "red",
    [styles.white]: variant === "white",
    [styles.black]: variant === "black",
  };

  return (
    <button
      className={cx(styles.root, classNames, className)}
      onClick={onClick}
      {...rest}
    >
      {icon && getIcons(icon)}
      {children}
    </button>
  );
};

export default Button;
