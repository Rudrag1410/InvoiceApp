import styles from "./desktopDrawer.module.scss";

import { useRef } from "react";
import useClickOutside from "hooks/useClickOutside";

import Back from "components/back";
import { Form } from "components/form";
import { FormInputsType } from "constants/Form.constants";
interface DrawerProps {
  handleDrawerToggler: () => void;
  isEditDrawer: boolean;
  id?: string;
  setCardData: React.Dispatch<React.SetStateAction<Array<FormInputsType>>>;
}
const DesktopDrawer = ({
  handleDrawerToggler,
  isEditDrawer,
  id,
  setCardData,
}: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeDrawer = () => {
    handleDrawerToggler();
  };
  useClickOutside(drawerRef, closeDrawer);
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.container} ref={drawerRef}>
        <Back MoveToPrevRoute={handleDrawerToggler} />
        <span className={styles.formHeading}>
          {isEditDrawer ? <div>Edit #{id}</div> : "New Invoice"}
        </span>
        <Form
          handleDrawerToggler={handleDrawerToggler}
          setCardData={setCardData}
        />
      </div>
    </>
  );
};

export default DesktopDrawer;
