import { useRef, useState } from "react";
import { getIcons } from "assests";
import styles from "./Dropdown.module.scss";
import useClickOutside from "hooks/useClickOutside";
import { IconsType } from "assests/types";

const Dropdown = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useClickOutside(dropdownRef, closeDropdown);

  return (
    <div className={styles.container} ref={dropdownRef}>
      <div onClick={toggleDropdown} className={styles.dropdownHeader}>
        <span>Filter</span>
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
