import styles from "./header.module.scss";

import React, { useCallback } from "react";

import { useIsMobile } from "hooks/isMobile";
import Typography from "components/typography";
import Dropdown from "components/dropdown";
import Button, { Variant } from "components/button";

import { IconsType } from "assests/types";

interface HeaderProps {
  handleDrawerToggler: () => void;
  setIsEditDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header = ({
  handleDrawerToggler,
  setIsEditDrawer,
}: HeaderProps): JSX.Element => {
  const handleDrawer = useCallback(() => {
    setIsEditDrawer(false);
    handleDrawerToggler();
  }, [setIsEditDrawer, handleDrawerToggler]);

  const isMobile = useIsMobile();

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div>
          <span className={styles.head}>Invoices</span>
          <Typography
            variant="spartan_medium"
            classname={styles.lightBlueColor}
          >
            {isMobile ? "3 invoices" : "There are 3 total invoices"}
          </Typography>
        </div>
        <div className={styles.right}>
          <Dropdown />
          {isMobile ? (
            <Button
              icon={IconsType.plus}
              variant={Variant.Primary}
              size="small"
              onClick={handleDrawer}
            >
              <Typography variant="spartan_bold">New</Typography>
            </Button>
          ) : (
            <Button
              icon={IconsType.plus}
              variant={Variant.Primary}
              size="extraLarge"
              onClick={handleDrawer}
            >
              <Typography variant="spartan_bold">New Invoice</Typography>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
