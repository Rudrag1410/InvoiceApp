/* eslint-disable react/display-name */
import React from "react";
import styles from "./input.module.scss";
import Label from "components/label";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  name?: string;
  id?: string;
  rest?: any;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { label, type = "text", placeholder, className, name, id, ...rest },
    ref
  ) => {
    return (
      <div className={styles.container}>
        <Label label={label} id={id} />
        <div className={styles.inputContainer}>
          <input
            type={type}
            className={`${styles.input} ${className}`}
            id={id}
            placeholder={placeholder}
            name={name}
            {...rest}
            ref={ref}
          />
        </div>
      </div>
    );
  }
);

export default Input;
