import Typography from "components/typography";
import styles from "./card.module.scss";
import InvoiceStatus from "components/invoiceStatus";
import Input from "components/input";

interface CardProps {
  invoiceNumber: string;
  date: string;
  amount: string;
  owner: string;
  status: "paid" | "pending" | "draft";
}

const Card = ({ amount, date, invoiceNumber, owner, status }: CardProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Typography variant="spartan_bold" classname={styles.lightBlackColor}>
          {`#${invoiceNumber}`}
        </Typography>
        <Typography variant="spartan_medium" classname={styles.lightBlueColor}>
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
          <Typography variant="spartan_bold" classname={styles.lightBlackColor}>
            {`£ ${amount}`}
          </Typography>
        </div>
        <InvoiceStatus variant={status} classname={styles.text}>
          {status}
        </InvoiceStatus>
      </div>
    </div>
  );
};

export default Card;
