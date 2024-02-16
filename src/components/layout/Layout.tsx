import Sidebar from "components/sidebar";
import styles from "./layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default Layout;
