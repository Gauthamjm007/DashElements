import { Grid, Stack, Box } from "@mui/material";
import styles from "../../../assets/styles/home.module.scss";
import { images } from "../../../constants";
import { Tags, LineGraph } from "../../../shared_ui_components";

const GRAPH_DATA = [
  { y: "Mar", x: 180 },
  { y: "May", x: 200 },
  { y: "Jul", x: 220 },
  { y: "Sep", x: 140 },
  { y: "Nov", x: 200 },
  { y: "Jan", x: 250 },
];

export default function Stats() {
  return (
    <div className={styles.statsWrapper}>
      <Grid container spacing={3} direction="row" alignItems="stretch">
        <Grid item md={8} sm={12} xs={12}>
          <div className={`cardBg ${styles.earningWrapper}`}>
            <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
              <h6 className="subtext">EARNINGS</h6>
            </Box>
            <Grid
              container
              spacing={2}
              direction={{ xs: "column-reverse", md: "row" }}
            >
              <Grid item md={3} xs={12}>
                <Stack direction={{ xs: "row", sm: "column" }} spacing={3}>
                  <span>
                    <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
                      <h6 className="subtext">EARNINGS</h6>
                    </Box>
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
                    <Stack
                      direction={{ xs: "row", sm: "column" }}
                      spacing={"12px"}
                    >
                      <Tags type="eth" value={"0.9087"} />
                      <Tags type="btc" value={"0.5"} />
                    </Stack>
                  </span>
                </Stack>
              </Grid>
              <Grid item md={9} xs={12}>
                <LineGraph data={GRAPH_DATA} />
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
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
