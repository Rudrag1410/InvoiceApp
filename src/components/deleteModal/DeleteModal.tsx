import { Variant } from "components/button";
import styles from "./deleteModal.module.scss";
import Button from "components/button";
import Typography from "components/typography";

interface DeleteModalProps {
  closeModal: () => void;
  onDelete: () => void;
}

const DeleteModal = ({
  closeModal,
  onDelete,
}: DeleteModalProps): JSX.Element => {
  const handleDelete = () => {
    onDelete();
    closeModal();
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Typography variant="spartan_bold" classname={styles.title}>
          Confirm Deletion
        </Typography>
        <Typography variant="spartan_medium" classname={styles.text}>
          Are you sure you want to delete invoice #XM9141? This action cannot be
          undone.
        </Typography>
        <div className={styles.buttonWrapper}>
          <Button variant={Variant.White} size="medium" onClick={closeModal}>
            <Typography variant="spartan_bold">Cancel</Typography>
          </Button>
          <Button variant={Variant.Red} size="medium" onClick={handleDelete}>
            <Typography variant="spartan_bold">Delete</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
