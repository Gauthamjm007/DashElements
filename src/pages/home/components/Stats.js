import { Grid, Stack } from "@mui/material";
import styles from "../../../assets/styles/home.module.scss";
import { images } from "../../../constants";
import { Tags } from "../../../shared_ui_components";

export default function Stats() {
  return (
    <div className={styles.statsWrapper}>
      <Grid container spacing={3} direction="row" alignItems="stretch">
        <Grid item xs={8}>
          <div className={`cardBg ${styles.earningWrapper}`}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Stack direction="column" spacing={3}>
                  <span>
                    <h6 className="subtext">EARNINGS</h6>
                  </span>
                  <span>
                    <Stack direction="column">
                      <div className={`heading1 ${styles.currencyWrapper}`}>
                        <span>$</span>2878.90
                      </div>
                      <p className={`subtext ${styles.progressWrapper}`}>
                        <b>+42</b> since last week
                      </p>
                    </Stack>
                  </span>
                  <span>
                    <Stack direction="column" spacing={"12px"}>
                      <Tags type="eth" value={"0.9087"} />
                      <Tags type="btc" value={"0.5"} />
                    </Stack>
                  </span>
                </Stack>
              </Grid>
              <Grid item xs={8}></Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={`cardBg ${styles.earningWrapper}`}>
            <Stack direction="row" justifyContent="space-between">
              <div>
                <Stack direction="column" spacing={2}>
                  <span>
                    <h6 className="subtext">RANK</h6>
                  </span>
                  <span>
                    <Stack direction="column">
                      <div className={`heading1 ${styles.currencyWrapper}`}>
                        <span className={styles.rankIcon}>
                          <img src={images.rank} alt="rank" />
                        </span>
                        607
                      </div>
                      <p className={`subtext ${styles.progressWrapper}`}>
                        You’re in top <b>40%</b>
                      </p>
                    </Stack>
                  </span>
                </Stack>
              </div>
              <div>
                <Stack direction="column" spacing={2} alignItems="flex-end">
                  <span>
                    <h6 className="subtext">PROJECTS</h6>
                  </span>
                  <span>
                    <Stack direction="column" alignItems="flex-end">
                      <div className={`heading1 ${styles.currencyWrapper}`}>
                        <span className={styles.rankIcon}>
                          <img src={images.project} alt="rank" />
                        </span>
                        45
                      </div>
                      <p className={`subtext ${styles.progressWrapper}`}>
                        <b>10</b> in this month
                      </p>
                    </Stack>
                  </span>
                </Stack>
              </div>
            </Stack>
            <div className={` ${styles.topCategories}`}>
              <p className={`subtext ${styles.header}`}>TOP CATEGORIES</p>
              <Stack direction="row" spacing={"12px"}>
                <Tags value="ruby" />
                <Tags value="clojure" />
                <Tags value="java" />
              </Stack>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
