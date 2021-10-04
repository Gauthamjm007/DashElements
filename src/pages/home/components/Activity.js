import { Stack, Grid } from "@mui/material";
import styles from "../../../assets/styles/home.module.scss";
import { images } from "../../../constants";
import { Tags } from "../../../shared_ui_components";
import {
  RouteList,
  RouteContinouseItem,
} from "../../../shared_ui_components/ContinousProfile";
import UserProfile from "../../../shared_ui_components/UserProfile";
import { InfoHeader } from "./";

export default function Activity() {
  return (
    <Grid
      container
      alignItems="stretch"
      spacing={3}
      direction="row"
      justifyContent="stretch"
    >
      <Grid item xs={8}>
        <InfoHeader
          title={"Activity"}
          route={{ label: "VIEW ALL ACTIVITY", path: "/" }}
        />
        <div className={`cardBg ${styles.activityWrapper}`}>
          <p className="subtext">RECENT</p>
          <div className={styles.usersListWrapper}>
            <ul className="listUnstyled">
              {[1, 2, 3].map((item) => (
                <li>
                  <div className="userProfileWrapper">
                    <Grid container justifyContent="space-between">
                      <Grid item>
                        <Stack
                          spacing={"12px"}
                          alignItem="center"
                          direction="row"
                        >
                          <div>
                            <img src={images.profile1} alt="profile1" />
                          </div>
                          <div className="rightInfoWrapper">
                            <Stack spacing={"12px"}>
                              <div>
                                <p className="paragraph name">Mathew John</p>
                                <p className="subtitle otherText">$10938.34 </p>
                              </div>
                              <div>
                                <Stack
                                  spacing={"12px"}
                                  direction="row"
                                  alignItems="center"
                                >
                                  <div>
                                    <Tags type="eth" value="1.2" />
                                  </div>
                                  <div>
                                    <h3 className="heading3">$760</h3>
                                  </div>
                                </Stack>
                              </div>
                            </Stack>
                          </div>
                        </Stack>
                      </Grid>
                      <Grid item>
                        <p className="subtitle">1 hour ago</p>
                      </Grid>
                    </Grid>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Grid>
      <Grid item xs={4}>
        <InfoHeader
          title={"Top Earners"}
          route={{ label: "VIEW ALL", path: "/" }}
        />
        <div className={`cardBg ${styles.earnersWrapper}`}>
          <Stack direction="row" justifyContent="space-between">
            <div>
              <p className="subtext">RANKINGS</p>
            </div>
            <div>
              <ul className="listInline">
                <li className="listInlineItem mr8">
                  <p className="subtitle">This month</p>
                </li>
                <li className="listInlineItem">
                  <h6 className="subtitle">All time</h6>
                </li>
              </ul>
            </div>
          </Stack>
          <div className={` ${styles.earnersList}`}>
            <ul className="listInline">
              <li className="listInlineItem heading3">
                <div className={` ${styles.earnerItem}`}>
                  <UserProfile />
                </div>
              </li>

              <li className="listInlineItem heading3">
                <div className={` ${styles.earnerItem}`}>
                  <UserProfile />
                </div>
              </li>

              <li className="listInlineItem heading3">
                <div className={` ${styles.earnerItem}`}>
                  <UserProfile />
                </div>
              </li>
              <li className="listInlineItem heading3">
                <div className={` ${styles.earnerItem}`}>
                  <UserProfile />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
