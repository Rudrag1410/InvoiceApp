import { IconsType } from "assests/types";
import styles from "./desktopSidebar.module.scss";
import { getIcons } from "assests";

const DesktopSidebar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        {getIcons(IconsType.logo, {
          className: styles.logo,
        })}
      </div>
      <div className={styles.bottom}>
        <div className={styles.divider}></div>
        <div className={styles.avatar}></div>
      </div>
    </div>
  );
};

export default DesktopSidebar;
