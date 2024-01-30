import styles from "./label.module.scss";
interface LabelProps {
  label?: string;
  id?: string;
}
const label = ({ label, id }: LabelProps): JSX.Element => {
  return (
    <div className={styles.labelContainer}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};

export default label;
