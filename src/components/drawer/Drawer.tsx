import Form from "components/form";
import styles from "./drawer.module.scss";
interface DrawerProps {
  DrawerToggler: () => void;
}
const Drawer = ({ DrawerToggler }: DrawerProps): JSX.Element => {
  return (
    <div className={styles.root}>
      <Form DrawerToggler={DrawerToggler} />
    </div>
  );
};

export default Drawer;
