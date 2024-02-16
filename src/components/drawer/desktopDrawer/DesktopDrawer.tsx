import FormFooter from "components/form/FormFooter";
import { Form } from "components/form";
import styles from "./desktopDrawer.module.scss";
import Back from "components/back";
import useClickOutside from "hooks/useClickOutside";
import { useRef } from "react";
interface DrawerProps {
  handleDrawerToggler: () => void;
  isEditDrawer: boolean;
}
const DesktopDrawer = ({ handleDrawerToggler, isEditDrawer }: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeDraweer = () => {
    handleDrawerToggler();
  };
  useClickOutside(drawerRef, closeDraweer);
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.container} ref={drawerRef}>
        <Back MoveToPrevRoute={handleDrawerToggler} />
        <span className={styles.formHeading}>
          {isEditDrawer ? <div>Edit #XM9141</div> : "New Invoice"}
        </span>
        <Form />
        <FormFooter DrawerToggler={handleDrawerToggler} />
      </div>
    </>
  );
};

export default DesktopDrawer;
