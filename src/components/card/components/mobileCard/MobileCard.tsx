import Typography from "components/typography";
import styles from "./mobileCard.module.scss";
import InvoiceStatus from "components/invoiceStatus";

interface MobileCardProps {
  invoiceNumber: string;
  date: string;
  amount: string;
  owner: string;
  status: "paid" | "pending" | "draft";
  onClick?: VoidFunction;
}
const MobileCard = ({
  amount,
  date,
  invoiceNumber,
  owner,
  status,
  onClick,
}: MobileCardProps): JSX.Element => {
  return (
    <div onClick={onClick} className={styles.root}>
      <div className={styles.header}>
        <Typography variant="spartan_bold">{`#${invoiceNumber}`}</Typography>
        <Typography variant="spartan_medium" classname={styles.owner}>
          {owner}
        </Typography>
      </div>
      <div className={styles.content}>
        <div className={styles.dateWrapper}>
          <Typography
            variant="spartan_medium"
            classname={styles.lightBlueColor}
          >
            {` Due ${date}`}
          </Typography>
          <Typography variant="spartan_bold">{`£ ${amount}`}</Typography>
        </div>
        <InvoiceStatus variant={status} classname={styles.text}>
          {status}
        </InvoiceStatus>
      </div>
    </div>
  );
};

export default MobileCard;
