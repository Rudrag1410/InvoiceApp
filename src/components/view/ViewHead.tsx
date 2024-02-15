import Button, { Variant } from "components/button";
import styles from "./view.module.scss";
import InvoiceStatus from "components/invoiceStatus";
import Typography from "components/typography";
import { useIsMobile } from "hooks/isMobile";

interface ViewHeadProps {
  handleDelete: VoidFunction;
  handleEdit: VoidFunction;
}
const ViewHead = ({ handleDelete, handleEdit }: ViewHeadProps): JSX.Element => {
  const isMobile = useIsMobile();
  return (
    <div className={styles.headRoot}>
      <Typography variant="spartan_medium" classname={styles.status}>
        Status
      </Typography>
      <InvoiceStatus variant="paid" classname={styles.text}>
        Paid
      </InvoiceStatus>
      {!isMobile && (
        <div className={styles.buttonWrapper}>
          <Button size="small" variant={Variant.White} onClick={handleEdit}>
            <Typography variant="spartan_bold">Edit</Typography>
          </Button>
          <Button size="small" variant={Variant.Red} onClick={handleDelete}>
            <Typography variant="spartan_bold">Delete</Typography>
          </Button>
          <Button size="large" value={Variant.Primary}>
            <Typography variant="spartan_bold">Mark as Paid</Typography>
          </Button>
        </div>
      )}
    </div>
  );
};

export default ViewHead;
