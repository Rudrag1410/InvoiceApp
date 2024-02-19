import { useIsMobile } from "hooks/isMobile";
import { useState } from "react";
import { useRouter } from "next/router";

import Header from "components/header";
import Card from "components/card";
import Empty from "components/empty";
import MobileDrawer from "components/drawer/mobileDrawer";
import DesktopDrawer from "components/drawer/desktopDrawer";

const Dashboard = (): JSX.Element => {
  const { push } = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [isEditDrawer, setIsEditDrawer] = useState<boolean>(false);

  const [cardData, setCardData] = useState([]);
  const isMobile = useIsMobile();

  const handleDrawerToggler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {isMobile
        ? isOpen && (
            <MobileDrawer
              setCardData={setCardData}
              isEditDrawer={isEditDrawer}
              handleDrawerToggler={handleDrawerToggler}
            />
          )
        : isOpen && (
            <DesktopDrawer
              isEditDrawer={isEditDrawer}
              setCardData={setCardData}
              handleDrawerToggler={handleDrawerToggler}
            />
          )}
      <Header
        setIsEditDrawer={setIsEditDrawer}
        handleDrawerToggler={handleDrawerToggler}
      />

      {cardData.length > 0 ? (
        cardData.map((card, index) => (
          <Card
            onClick={() => {
              push(`/invoice/${card?.invoiceNumber}`);
            }}
            key={index}
            amount={card?.price}
            date={card?.date}
            invoiceNumber="1"
            owner={card?.clientName}
            status={card?.status}
          />
        ))
      ) : (
        <Empty />
      )}
    </>
  );
};

export default Dashboard;
