import styles from "../../../assets/styles/home.module.scss";
import { images } from "../../../constants";
import { Stack } from "@mui/material";

export default function InfoHeader({ title, route }) {
  return (
    <div className={styles.infoWrapper}>
      <div className={styles.infoHeaderWrapper}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <div>
            <h3 className="heading3"> {title}</h3>
          </div>
          <div role="heading">
            <Stack direction="row" spacing={1} alignItems="center">
              <p className="heading6">{route?.label}</p>
              <span>
                <img src={images.arrow} />
              </span>
            </Stack>
          </div>
        </Stack>
      </div>
    </div>
  );
}
