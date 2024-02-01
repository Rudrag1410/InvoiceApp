import { getIcons } from "assests";
import styles from "./mobileSidebar.module.scss";
import { IconsType } from "assests/types";
const MobileSidebar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.left}>{getIcons(IconsType.logo)}</div>
      <div className={styles.right}>
        <div className={styles.divider}></div>
        <div className={styles.avatar}></div>
      </div>
    </div>
  );
};

export default MobileSidebar;
