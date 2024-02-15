import { useRef, useState } from "react";
import { useIsMobile } from "hooks/isMobile";
import { getIcons } from "assests";
import styles from "./Dropdown.module.scss";
import useClickOutside from "hooks/useClickOutside";
import { IconsType } from "assests/types";
import Typography from "components/typography";

const Dropdown = (): JSX.Element => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const checkboxData = [
    { id: "draft", label: "Draft" },
    { id: "paid", label: "Paid" },
    { id: "pending", label: "Pending" },
  ];
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
          {checkboxData.map((checkbox) => (
            <div key={checkbox.id} className={styles.dropdownBoxChild}>
              <input
                type="checkbox"
                id={checkbox.id}
                className={styles.checkboxInput}
              />
              <label htmlFor={checkbox.id} className={styles.label}>
                <Typography variant="spartan_medium">
                  {checkbox.label}
                </Typography>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
