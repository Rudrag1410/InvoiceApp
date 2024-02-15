import Header from "components/header";
import Card from "components/card";
import Sidebar from "components/sidebar";
import Empty from "components/empty";
import MobileDrawer from "components/drawer/mobileDrawer";
import styles from "./dashboard.module.scss";
import Layout from "components/layout";
import { useIsMobile } from "hooks/isMobile";
import { useState } from "react";
import DesktopDrawer from "components/drawer/desktopDrawer";
import { cardData } from "./CardData";
import View from "components/view";

const Dashboard = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEditDrawer, setIsEditDrawer] = useState<boolean>(false);

  const isMobile = useIsMobile();

  const handleDrawerToggler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.root}>
      <Sidebar />
      <Layout>
        <Header
          setIsEditDrawer={setIsEditDrawer}
          handleDrawerToggler={handleDrawerToggler}
        />
        {cardData.length > 0 ? (
          cardData.map((card, index) => (
            <Card
              onClick={() => {
                handleDrawerToggler();
                setIsEditDrawer(true);
              }}
              key={index}
              amount={card.amount}
              date={card.date}
              invoiceNumber={card.invoiceNumber}
              owner={card.owner}
              status={card.status}
            />
          ))
        ) : (
          <Empty />
        )}
        {/* <View handleDrawerToggler={handleDrawerToggler} /> */}
      </Layout>
      {isMobile
        ? isOpen && (
            <MobileDrawer
              isEditDrawer={isEditDrawer}
              handleDrawerToggler={handleDrawerToggler}
            />
          )
        : isOpen && (
            <DesktopDrawer
              isEditDrawer={isEditDrawer}
              handleDrawerToggler={handleDrawerToggler}
            />
          )}
    </div>
  );
};

export default Dashboard;
