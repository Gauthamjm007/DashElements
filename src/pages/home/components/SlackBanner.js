import { Grid, Stack } from "@mui/material";
import styles from "../../../assets/styles/home.module.scss";
import { images } from "../../../constants";

export default function SlackBanner() {
  return (
    <div className={styles.slackBannerWrapper}>
      <Grid container alignItems="center" spacing={3}>
        <Grid item md={8} sm={12} xs={12}>
          <Stack
            spacing={"36px"}
            alignItems="center"
            direction={{ xs: "column", sm: "row" }}
          >
            <div>
              <img src={images.slack} alt="slack" />
            </div>
            <div>
              <Stack
                spacing={"12px"}
                justifyContent={{ xs: "center", sm: "flex-start" }}
              >
                <h2 className="heading2">Join the conversation on Slack</h2>
                <p className="paragraph">
                  Stay up to date on the latest news and special programs that
                  only take place within the slack channel.
                </p>
              </Stack>
            </div>
          </Stack>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Stack
            spacing={"24px"}
            direction="row"
            justifyContent={{ xs: "center", sm: "flex-start" }}
          >
            <button className="secondaryBtn">remind later</button>
            <button className="primaryBtn">join now</button>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
