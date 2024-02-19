import styles from "./mobileDrawer.module.scss";
import Back from "components/back";
import { Form } from "components/form";
import { FormInputsType } from "constants/Form.constants";

interface DrawerProps {
  handleDrawerToggler: () => void;
  isEditDrawer: boolean;
  setCardData: React.Dispatch<React.SetStateAction<Array<FormInputsType>>>;
}
const Drawer = ({
  handleDrawerToggler,
  isEditDrawer,
  setCardData,
}: DrawerProps): JSX.Element => {
  return (
    <div className={styles.root}>
      <Back MoveToPrevRoute={handleDrawerToggler} />
      <span className={styles.formHeading}>
        {isEditDrawer ? <div>Edit #XM9141</div> : "New Invoice"}
      </span>
      <Form
        handleDrawerToggler={handleDrawerToggler}
        setCardData={setCardData}
      />
    </div>
  );
};

export default Drawer;
