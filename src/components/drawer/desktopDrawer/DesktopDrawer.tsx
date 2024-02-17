import styles from "./desktopDrawer.module.scss";

import { useRef } from "react";
import useClickOutside from "hooks/useClickOutside";

import Back from "components/back";
import { Form } from "components/form";
interface DrawerProps {
  handleDrawerToggler: () => void;
  isEditDrawer: boolean;
  id?: string;
}
const DesktopDrawer = ({
  handleDrawerToggler,
  isEditDrawer,
  id,
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
        <Form handleDrawerToggler={handleDrawerToggler} />
      </div>
    </>
  );
};

export default DesktopDrawer;
