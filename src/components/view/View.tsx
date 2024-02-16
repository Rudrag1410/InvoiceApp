import Back from "components/back";
import styles from "./view.module.scss";
import ViewHead from "./ViewHead";
import ViewBottom from "./ViewBottom";
import DeleteModal from "components/deleteModal";
import { useState } from "react";
import { useRouter } from "next/router";

interface ViewProps {
  id: string;
}
const View = ({ id }: ViewProps): JSX.Element => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const { back } = useRouter();

  const handleDeleteInvoice = () => {
    // TODO: implement delete invoice
    console.log("Deleting invoice...");
    setOpenDeleteModal((prev) => !prev);
  };
  const handlePrevRoute = () => {
    back();
  };

  return (
    <div className={styles.root}>
      <div className={styles.back}>
        <Back MoveToPrevRoute={handlePrevRoute} />
      </div>

      <div className={styles.container}>
        <ViewHead handleDelete={() => setOpenDeleteModal(true)} />
        <ViewBottom id={id} handleDelete={() => setOpenDeleteModal(true)} />
      </div>

      {openDeleteModal && (
        <DeleteModal
          closeModal={() => setOpenDeleteModal(false)}
          onDelete={handleDeleteInvoice}
        />
      )}
    </div>
  );
};
export default View;
