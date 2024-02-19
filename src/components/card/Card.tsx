import { useIsMobile } from "hooks/isMobile";

import MobileCard from "./components/mobileCard/MobileCard";
import DesktopCard from "./components/desktopCard";

interface CardProps {
  invoiceNumber: string;
  date: string;
  amount: string;
  owner: string;
  status: "paid" | "pending" | "draft";
  onClick?: VoidFunction;
}

const Card = ({
  amount,
  date,
  invoiceNumber,
  owner,
  status,
  onClick,
}: CardProps): JSX.Element => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <MobileCard
          amount={amount}
          invoiceNumber={invoiceNumber}
          date={date}
          owner={owner}
          onClick={onClick}
          status={status}
        />
      ) : (
        <DesktopCard
          amount={amount}
          invoiceNumber={invoiceNumber}
          date={date}
          owner={owner}
          onClick={onClick}
          status={status}
        />
      )}
    </>
  );
};

export default Card;
