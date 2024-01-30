import Button from "components/button";
import styles from "./formFooter.module.scss";

interface FormFooterProps {
  DrawerToggler: () => void;
}
const FormFooter = ({ DrawerToggler }: FormFooterProps) => {
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
    <div className={styles.buttonWrapper}>
      <Button
        variant="light"
        onClick={handleDiscard}
        classname={styles.customButton}
      >
        Discard
      </Button>
      <Button
        variant="dark"
        onClick={handleDraft}
        classname={styles.customButton}
      >
        Save as Draft
      </Button>
      <Button
        variant="primary"
        onClick={handleSave}
        classname={styles.customButton}
      >
        Save & Send
      </Button>
    </div>
  );
};

export default FormFooter;
