import Typography from "components/typography";
import styles from "./view.module.scss";
import cx from "classnames";
import Receipt from "./Receipt";

interface ViewBottomProps {
  id: string;
  handleDelete: VoidFunction;
}
const ViewBottom = ({ id, handleDelete }: ViewBottomProps): JSX.Element => {
  return (
    <div className={styles.bottomRoot}>
      <div className={styles.bottomTop}>
        <Typography variant="spartan_bold">#{id}</Typography>
        <Typography variant="spartan_medium" classname={styles.text}>
          Graphic Design
        </Typography>
      </div>

      <div className={cx(styles.address, styles.text)}>
        <p>19 Union Terrace</p>
        <p>London</p>
        <p>E1 3EZ</p>
        <p>United Kingdom</p>
      </div>

      <div className={styles.billingInfo}>
        <div className={styles.date}>
          <div className={styles.dateContent}>
            <Typography variant="spartan_medium" classname={styles.text}>
              Invoice Date
            </Typography>
            <Typography variant="spartan_bold">1 March, 2020</Typography>
          </div>

          <div className={styles.dateContent}>
            <Typography variant="spartan_medium" classname={styles.text}>
              Payment Due
            </Typography>
            <Typography variant="spartan_bold">20 Sep 2021</Typography>
          </div>
        </div>

        <div className={styles.billing}>
          <Typography variant="spartan_medium" classname={styles.text}>
            Bill To
          </Typography>
          <Typography variant="spartan_bold">Alex Grimm</Typography>
          <div className={cx(styles.address, styles.text)}>
            <span>84 Church Way</span>
            <span>Bradford</span>
            <span>BD1 9PB</span>
            <span>United Kingdom</span>
          </div>
        </div>
      </div>
      <div className={styles.email}>
        <Typography variant="spartan_medium" classname={styles.text}>
          Send To
        </Typography>
        <Typography variant="spartan_bold">alexgrim@mail.com</Typography>
      </div>

      <Receipt handleDelete={handleDelete} />
    </div>
  );
};

export default ViewBottom;
