import { IconsType } from "assests/types";
import styles from "./empty.module.scss";
import { getIcons } from "assests";
import Typography from "components/typography";
const Empty = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className={styles.icons}>{getIcons(IconsType.empty)}</div>
      <div className={styles.text}>
        <Typography variant="spartan_bold" classname={styles.first}>
          There is nothing here
        </Typography>
        <Typography variant="spartan_medium" classname={styles.second}>
          Create an invoice by clicking the New button and get started
        </Typography>
      </div>
    </div>
  );
};
export default Empty;
