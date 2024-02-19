import styles from "./view.module.scss";

import { useState } from "react";
import { useRouter } from "next/router";
import { useIsMobile } from "hooks/isMobile";

import ViewHead from "./ViewHead";
import ViewBottom from "./ViewBottom";
import Back from "components/back";
import DeleteModal from "components/deleteModal";
import MobileDrawer from "components/drawer/mobileDrawer";
import DesktopDrawer from "components/drawer/desktopDrawer";

interface ViewProps {
  id: string;
  setIsEditDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}
const View = ({ id }: ViewProps): JSX.Element => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEditDrawer, setIsEditDrawer] = useState<boolean>(false);

  const handleDrawerToggler = () => {
    setIsOpen((prev) => !prev);
    setIsEditDrawer(true);
  };
  const { back } = useRouter();
  const isMobile = useIsMobile();

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
        <ViewHead
          handleDelete={() => setOpenDeleteModal(true)}
          handleDrawerToggler={handleDrawerToggler}
        />
        <ViewBottom
          id={id}
          handleDelete={() => setOpenDeleteModal(true)}
          handleDrawerToggler={handleDrawerToggler}
        />
      </div>

      {openDeleteModal && (
        <DeleteModal
          closeModal={() => setOpenDeleteModal(false)}
          onDelete={handleDeleteInvoice}
        />
      )}
      {isMobile
        ? isOpen && (
            <MobileDrawer
              isEditDrawer={isEditDrawer}
              handleDrawerToggler={handleDrawerToggler}
            />
          )
        : isOpen && (
            <DesktopDrawer
              isEditDrawer={isEditDrawer}
              handleDrawerToggler={handleDrawerToggler}
              id={id}
            />
          )}
    </div>
  );
};
export default View;
