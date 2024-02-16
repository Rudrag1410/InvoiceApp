import styles from "./mobileDrawer.module.scss";
import Back from "components/back";
import { Form } from "components/form";
import FormFooter from "components/form/FormFooter";
interface DrawerProps {
  handleDrawerToggler: () => void;
  isEditDrawer: boolean;
}
const Drawer = ({
  handleDrawerToggler,
  isEditDrawer,
}: DrawerProps): JSX.Element => {
  return (
    <div className={styles.root}>
      <Back MoveToPrevRoute={handleDrawerToggler} />
      <span className={styles.formHeading}>
        {isEditDrawer ? <div>Edit #XM9141</div> : "New Invoice"}
      </span>
      <Form />
      <FormFooter DrawerToggler={handleDrawerToggler} />
    </div>
  );
};

export default Drawer;
