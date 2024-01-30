import React, { useState } from "react";
import Typography from "components/typography";
import styles from "./header.module.scss";
import Button from "components/button";
import { IconsType } from "assests/types";
import Dropdown from "components/dropdown";

interface HeaderProps {
  DrawerToggler: () => void;
}
const Header = ({ DrawerToggler }: HeaderProps): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Typography variant="spartan_bold">Invoices</Typography>
          <Typography
            variant="spartan_medium"
            classname={styles.lightBlueColor}
          >
            7 invoices
          </Typography>
        </div>
        <div className={styles.right}>
          <Dropdown />
          <Button
            variant="primary"
            icon={IconsType.plus}
            classname={styles.headerbtn}
            onClick={DrawerToggler}
          >
            <Typography variant="spartan_bold">New</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
