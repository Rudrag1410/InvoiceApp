import Select from "react-select";

import styles from "./customselect.module.scss";
import Label from "components/label";

export interface SelectDropDownProps {
  value: string;
  label: string;
}

interface SelectProps {
  value?: SelectDropDownProps;
  onChange?: () => void;
  options?: SelectDropDownProps[];
  required?: boolean;
  label?: string;
  placeholder?: string;
}

const CustomSelect = ({
  onChange,
  options,
  value,
  label,
  placeholder,
}: SelectProps) => {
  return (
    <div className={styles.container}>
      <Label label={label} />
      <Select
        placeholder={placeholder}
        className={styles.select}
        value={value}
        onChange={onChange}
        options={options}
      />
    </div>
  );
};
export default CustomSelect;
