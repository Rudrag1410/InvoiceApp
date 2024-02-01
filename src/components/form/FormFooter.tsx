import Button, { Variant } from "components/button";
import styles from "./form.module.scss";
import SpacingDivider from "components/spacingDivider";

interface FormFooterProps {
  DrawerToggler: () => void;
}
const FormFooter = ({ DrawerToggler }: FormFooterProps): JSX.Element => {
  const handleDiscard = () => {
    DrawerToggler();
  };

  const handleDraft = () => {
    console.log("Form Is Save as Draft");
  };

  const handleSave = () => {
    console.log("Form is Save");
  };

  return (
    <>
      <div className={styles.shadow}></div>
      <div className={styles.buttonWrapper}>
        <Button variant={Variant.White} size="large" onClick={handleDiscard}>
          Discard
        </Button>
        <Button variant={Variant.Black} size="large">
          Save as Draft
        </Button>
        <Button variant={Variant.Primary} size="large">
          Save & Send
        </Button>
      </div>
    </>
  );
};

export default FormFooter;
