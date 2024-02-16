import { getIcons } from "assests";
import styles from "./back.module.scss";
import { IconsType } from "assests/types";
import Typography from "components/typography";
interface BackProps {
  MoveToPrevRoute: () => void;
}
const Back = ({ MoveToPrevRoute }: BackProps): JSX.Element => {
  const back = () => {
    MoveToPrevRoute();
  };
  return (
    <div className={styles.root} onClick={back}>
      <div className={styles.icon}>{getIcons(IconsType.arrowUp)}</div>
      <Typography variant="spartan_bold">Go Back</Typography>
    </div>
  );
};

export default Back;
