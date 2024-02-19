import Button, { Variant } from "components/button";
import Typography from "components/typography";
import styles from "./buttonWrapper.module.scss";

interface ViewButtonProps {
  handleDelete: VoidFunction;
  handleEdit: VoidFunction;
}

const ViewButtonWrapper = ({
  handleDelete,
  handleEdit,
}: ViewButtonProps): JSX.Element => {
  return (
    <>
      <div className={styles.buttonWrapper}>
        <Button size="medium" variant={Variant.White} onClick={handleEdit}>
          <Typography variant="spartan_bold">Edit</Typography>
        </Button>
        <Button size="medium" variant={Variant.Red} onClick={handleDelete}>
          <Typography variant="spartan_bold">Delete</Typography>
        </Button>
        <Button size="extraLarge" value={Variant.Primary}>
          <Typography variant="spartan_bold">Mark as Paid</Typography>
        </Button>
      </div>
    </>
  );
};

export default ViewButtonWrapper;
