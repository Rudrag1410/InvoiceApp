import Header from "components/header";
import styles from "./dashboard.module.scss";
import Card from "components/card";
import Sidebar from "components/sidebar";
import Empty from "components/empty";
import Drawer from "components/drawer";
import { useState } from "react";

interface ICardResponse {
  amount: string;
  date: string;
  invoiceNumber: string;
  owner: string;
  status: "paid" | "pending" | "draft";
}

const Dashboard = (): JSX.Element => {
  const cardData: ICardResponse[] = [
    {
      amount: "1,800.90",
      date: "19 Aug 2024",
      invoiceNumber: "RT3080",
      owner: "Jensen Huang",
      status: "paid",
    },
    {
      amount: "£ 6,155.91",
      date: "31 Sep 2021",
      invoiceNumber: "XM9141",
      owner: "Alex Grim",
      status: "pending",
    },
    {
      amount: "102.04",
      date: "10 OCT 2024",
      invoiceNumber: "AA1449",
      owner: "Alysa Werner",
      status: "draft",
    },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.root}>
      <Sidebar />
      <Header DrawerToggler={toggleDrawer} />
      {cardData.length > 0 ? (
        cardData.map((card, index) => (
          <Card
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
      {isOpen && <Drawer DrawerToggler={toggleDrawer} />}
    </div>
  );
};

export default Dashboard;
