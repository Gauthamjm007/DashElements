import { Grid, Stack } from "@mui/material";
import styles from "../../../assets/styles/home.module.scss";
import { images } from "../../../constants";

export default function SlackBanner() {
  return (
    <div className={styles.slackBannerWrapper}>
      <Grid container alignItems="center" spacing={3}>
        <Grid item xs={8}>
          <Stack spacing={"36px"} alignItems="center" direction="row">
            <div>
              <img src={images.slack} alt="slack" />
            </div>
            <div>
              <Stack spacing={"12px"}>
                <h2 className="heading2">Join the conversation on Slack</h2>
                <p className="paragraph">
                  Stay up to date on the latest news and special programs that
                  only take place within the slack channel.
                </p>
              </Stack>
            </div>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={"24px"} direction="row">
            <button className="secondaryBtn">remind later</button>
            <button className="primaryBtn">join now</button>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
