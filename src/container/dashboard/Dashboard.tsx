import { useIsMobile } from "hooks/isMobile";
import { useState } from "react";
import { useRouter } from "next/router";

import Header from "components/header";
import Card from "components/card";
import Empty from "components/empty";
import MobileDrawer from "components/drawer/mobileDrawer";
import DesktopDrawer from "components/drawer/desktopDrawer";

import { cardData } from "constants/CardData";

const Dashboard = (): JSX.Element => {
  const { push } = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [isEditDrawer, setIsEditDrawer] = useState<boolean>(false);

  const isMobile = useIsMobile();

  const handleDrawerToggler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Header
        setIsEditDrawer={setIsEditDrawer}
        handleDrawerToggler={handleDrawerToggler}
      />

      {cardData.length > 0 ? (
        cardData.map((card, index) => (
          <Card
            onClick={() => {
              push(`/invoice/${card.invoiceNumber}`);
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
    </>
  );
};

export default Dashboard;
