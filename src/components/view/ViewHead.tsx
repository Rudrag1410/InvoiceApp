import styles from "./view.module.scss";
import InvoiceStatus from "components/invoiceStatus";
import Typography from "components/typography";
import ViewButtonWrapper from "./components/viewButton";
import { useIsMobile } from "hooks/isMobile";

interface ViewHeadProps {
  handleDelete: VoidFunction;
}
const ViewHead = ({ handleDelete }: ViewHeadProps): JSX.Element => {
  const isMobile = useIsMobile();
  return (
    <div className={styles.headRoot}>
      <Typography variant="spartan_medium" classname={styles.status}>
        Status
      </Typography>
      <InvoiceStatus variant="paid" classname={styles.text}>
        Paid
      </InvoiceStatus>

      {!isMobile && <ViewButtonWrapper handleDelete={handleDelete} />}
    </div>
  );
};

export default ViewHead;
