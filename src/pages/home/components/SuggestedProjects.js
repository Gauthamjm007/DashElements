import { Stack, Grid } from "@mui/material";
import styles from "../../../assets/styles/home.module.scss";
import { images } from "../../../constants";
import { Tags } from "../../../shared_ui_components";
import UserProfile from "../../../shared_ui_components/UserProfile";

export default function SuggestedProjects() {
  return (
    <div className={styles.suggestedProjectsWrapper}>
      <div className={styles.suggestedProjectsHeader}>
        <Stack direction="row" justifyContent="space-between">
          <div className="heading3" role="heading">
            Suggested Projects
          </div>
          <div role="heading">
            <Stack direction="row" spacing={1} alignItems="center">
              <p className="heading6">VIEW ALL PROJECTS</p>
              <span>
                <img src={images.arrow} />
              </span>
            </Stack>
          </div>
        </Stack>
      </div>

      <div className={styles.suggestedProjectsList}>
        <Grid container spacing={3}>
          {[1, 2, 3].map((item) => (
            <Grid item xs={4}>
              <div className={`${styles.suggestedProjectCard} cardBg`}>
                <Stack direction="row" justifyContent="space-between" mb="10px">
                  <div>
                    <UserProfile />
                  </div>
                  <div>
                    <Tags value="html" />
                  </div>
                </Stack>
                <p className={`${styles.description} paragraph`}>
                  Design and develop a website for an educational platform
                  focusing on the growth of children.
                </p>
                <div className={`${styles.bottomInfo}`}>
                  <Grid container justifyContent="space-between">
                    <Grid item xs={8}>
                      <Stack spacing="12px" direction="row">
                        <Tags value="1.2" type="eth" />
                        <Tags value="0.3" type="btc" />
                      </Stack>
                    </Grid>
                    <Grid item xs={4} className="textRight">
                      <h3 className="heading3">$760</h3>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
