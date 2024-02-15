/* eslint-disable react/display-name */
import Select from "react-select";
import styles from "./customselect.module.scss";
import Label from "components/label";
import React from "react";

export interface SelectDropDownProps {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options?: SelectDropDownProps[];
  value?: SelectDropDownProps;
  label?: string;
  placeholder?: string;
  required?: boolean;
  rest?: any;
}

const CustomSelect = React.forwardRef<HTMLSelectElement, CustomSelectProps>(
  ({ options, value, label, placeholder, rest }, ref) => {
    return (
      <div className={styles.container}>
        <Label label={label} />
        <Select
          placeholder={placeholder}
          className={styles.select}
          value={value}
          options={options}
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);

export default CustomSelect;
