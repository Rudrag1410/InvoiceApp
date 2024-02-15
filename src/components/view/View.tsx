import Back from "components/back";
import styles from "./view.module.scss";
import ViewHead from "./ViewHead";
import ViewBottom from "./ViewBottom";
import DeleteModal from "components/deleteModal";
import { useState } from "react";

interface ViewProps {
  handleDrawerToggler: () => void;
  onClick?: VoidFunction;
}
const View = ({ handleDrawerToggler }: ViewProps) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleDeleteInvoice = () => {
    console.log("Deleting invoice...");
    setOpenDeleteModal((prev) => !prev);
  };
  return (
    <div className={styles.root}>
      <div className={styles.back}>
        <Back DrawerToggler={handleDrawerToggler} />
      </div>

      <div className={styles.container}>
        <ViewHead
          handleDelete={() => setOpenDeleteModal(true)}
          handleEdit={handleDrawerToggler}
        />
        <ViewBottom />
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
