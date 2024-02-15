import Typography from "components/typography";
import styles from "./view.module.scss";
const Receipt = () => {
  return (
    <>
      <div className={styles.receiptRoot}>
        <div className={styles.receiptContainer}>
          <div className={styles.receiptContentLeft}>
            <Typography variant="spartan_bold">Banner Design</Typography>
            <Typography variant="spartan_bold" classname={styles.text}>
              1 x £ 156.00
            </Typography>
          </div>
          <div>
            <Typography variant="spartan_bold">£ 156.00</Typography>
          </div>
        </div>

        <div className={styles.receiptContainer}>
          <div className={styles.receiptContentLeft}>
            <Typography variant="spartan_bold">Email Design</Typography>
            <Typography variant="spartan_bold" classname={styles.text}>
              2 x £ 200.00
            </Typography>
          </div>
          <div>
            <Typography variant="spartan_bold">£ 400.00</Typography>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <Typography variant="spartan_light" classname={styles.textLeft}>
          Grand Total
        </Typography>
        <Typography variant="spartan_bold" classname={styles.textRight}>
          £ 156.00
        </Typography>
      </div>
    </>
  );
};
export default Receipt;
