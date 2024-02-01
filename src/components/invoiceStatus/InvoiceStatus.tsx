import cx from "classnames";
import styles from "./invoice.module.scss";

interface StatusProps {
  variant?: "paid" | "pending" | "draft";
  classname?: string;
  children: React.ReactNode;
}

const InvoiceStatus = ({
  variant,
  classname,
  children,
}: StatusProps): JSX.Element => {
  return (
    <div
      className={cx(
        styles.invoiceStatus,
        {
          [styles.paid]: variant === "paid",
          [styles.pending]: variant === "pending",
          [styles.draft]: variant === "draft",
        },
        classname
      )}
    >
      <span>•</span> {children}
    </div>
  );
};

export default InvoiceStatus;
