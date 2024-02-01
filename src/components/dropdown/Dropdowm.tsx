import { useRef, useState } from "react";
import { useIsMobile } from "hooks/isMobile";
import { getIcons } from "assests";
import styles from "./Dropdown.module.scss";
import useClickOutside from "hooks/useClickOutside";
import { IconsType } from "assests/types";

const Dropdown = (): JSX.Element => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useClickOutside(dropdownRef, closeDropdown);
  const isMobile = useIsMobile();
  return (
    <div className={styles.container} ref={dropdownRef}>
      <div onClick={toggleDropdown} className={styles.dropdownHeader}>
        <span style={{ width: "max-content" }}>
          {isMobile ? "Filter" : "Filter by status"}
        </span>
        <span className={styles.icon}>{getIcons(IconsType.arrowUp)}</span>
      </div>
      {dropdownOpen && (
        <div className={styles.dropdownBox}>
          <div className={styles.dropdownBoxChildren}>
            <span>Draft</span>
            <span>Pending</span>
            <span>Paid</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
