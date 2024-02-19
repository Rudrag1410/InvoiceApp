/* eslint-disable react/display-name */
import Select from "react-select";
import styles from "./customselect.module.scss";
import Label from "components/label";
import React from "react";

export interface SelectDropDownProps {
  value: string;
  label: string;
}

interface SelectProps {
  value?: SelectDropDownProps;
  options?: SelectDropDownProps[];
  label: string;
  id: string;
  onChange?: VoidFunction;
  control?: any;
}
const CustomSelect = ({
  options,
  value,
  label,
  id,
  control,
  onChange,
}: SelectProps) => {
  return (
    <div className={styles.container}>
      <Label label={label} />
      <Select
        className={styles.select}
        value={value}
        options={options}
        id={id}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomSelect;
