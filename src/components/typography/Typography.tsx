import cx from "classnames";
import styles from "./typography.module.scss";

interface TypographyProps {
  variant?: "spartan_bold" | "spartan_medium" | "spartan_light";
  classname?: string;
  children: React.ReactNode;
}

const Typography = ({
  variant = "spartan_light",
  classname,
  children,
}: TypographyProps): JSX.Element => {
  return (
    <div
      className={cx(
        {
          [styles.spartanBold]: variant === "spartan_bold",
          [styles.spartanMedium]: variant === "spartan_medium",
          [styles.spartanLight]: variant === "spartan_light",
        },
        classname
      )}
    >
      {children}
    </div>
  );
};

export default Typography;
