import styles from "./input.module.scss";
import Label from "components/label";
import { useId } from "react";
interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
}
const Input = ({
  label,
  type = "text",
  placeholder,
  className,
  required = false,
}: InputProps): JSX.Element => {
  const id = useId();
  return (
    <div className={styles.container}>
      <Label label={label} id={id} />
      <div className={styles.inputContainer}>
        <input
          type={type}
          className={`${styles.input} ${className}`}
          id={id}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
};

export default Input;
