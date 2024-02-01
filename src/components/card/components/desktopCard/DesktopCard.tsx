import Typography from "components/typography";
import styles from "./desktopCard.module.scss";
import InvoiceStatus from "components/invoiceStatus";
import { getIcons } from "assests";
import { IconsType } from "assests/types";
import cx from "classnames";

interface DesktopCardProps {
  invoiceNumber: string;
  date: string;
  amount: string;
  owner: string;
  status: "paid" | "pending" | "draft";
  onClick?: VoidFunction;
}
const DesktopCard = ({
  amount,
  date,
  invoiceNumber,
  owner,
  status,
  onClick,
}: DesktopCardProps): JSX.Element => {
  return (
    <div onClick={onClick} className={styles.root}>
      <div className={styles.container}>
        <Typography
          variant="spartan_bold"
          classname={cx(styles.lightBlackColor, styles.number)}
        >
          {`#${invoiceNumber}`}
        </Typography>
        <Typography
          variant="spartan_medium"
          classname={cx(styles.lightBlueColor, styles.date)}
        >
          {` Due ${date}`}
        </Typography>
        <Typography
          variant="spartan_medium"
          classname={cx(styles.lightBlueColor, styles.owner)}
        >
          {owner}
        </Typography>
        <Typography
          variant="spartan_bold"
          classname={cx(styles.lightBlackColor, styles.price)}
        >
          {`£ ${amount}`}
        </Typography>
        <InvoiceStatus
          variant={status}
          classname={cx(styles.text, styles.status)}
        >
          {status}
        </InvoiceStatus>
        <span className={styles.icon}>{getIcons(IconsType.arrowUp)}</span>
      </div>
    </div>
  );
};

export default DesktopCard;
