import Button, { Variant } from "components/button";
import styles from "./form.module.scss";

interface FormFooterProps {
  DrawerToggler: () => void;
}
const FormFooter = ({ DrawerToggler }: FormFooterProps): JSX.Element => {
  const handleDiscard = () => {
    DrawerToggler();
  };

  return (
    <>
      <div className={styles.shadow}></div>
      <div className={styles.buttonWrapper}>
        <Button
          variant={Variant.White}
          size="large"
          onClick={handleDiscard}
          type="button"
        >
          Discard
        </Button>
        <Button variant={Variant.Black} size="large" type="button">
          Save as Draft
        </Button>
        <Button variant={Variant.Primary} size="large" type="submit">
          Save & Send
        </Button>
      </div>
    </>
  );
};

export default FormFooter;
