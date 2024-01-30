import styles from "./sidebar.module.scss";
const Sidebar = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>SIDEBAR</div>
      <div className={styles.right}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Sidebar;
