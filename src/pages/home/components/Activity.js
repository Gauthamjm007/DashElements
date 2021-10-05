import { Stack, Grid } from "@mui/material";
import styles from "../../../assets/styles/home.module.scss";
import { images } from "../../../constants";
import { Tags } from "../../../shared_ui_components";

import UserProfile from "../../../shared_ui_components/UserProfile";
import { InfoHeader } from "./";

const USER_SUGGESTIONS = [
  {
    user: {
      name: "Daniel Belu",
      lastActivity: "1 hours ago",
      image: images.profile2,
    },
    type: "dollar",
    tagsList: [
      {
        type: "eth",
        value: "1.2",
      },
    ],
    cost: "$760",
    description: "Recieved $760 for a Ruby project.",
  },
  {
    user: {
      name: "Christophe F. Batista",
      lastActivity: "3 hours ago",
      image: images.profile1,
    },
    type: "code",
    tagsList: [
      {
        type: "btc",
        value: "0.2",
      },
    ],
    cost: "$760",
    description: "Received  $620 for an html project.",
  },
  {
    user: {
      name: "Alice Martin",
      lastActivity: "5 hours ago",
      image: images.profile4,
    },
    type: "dollar",
    tagsList: [
      {
        type: "btc",
        value: "0.3",
      },
    ],
    cost: "$760",
    description: "Submitted a project in html.",
  },
];

const USER_RANKS = [
  {
    user: {
      name: "Daniel Belu",
      image: images.profile2,
    },
    cost: "$660",
  },
  {
    user: {
      name: "Christophe F. Batista",
      image: images.profile1,
    },
    cost: "$760",
  },
  {
    user: {
      name: "Alice Martin",
      image: images.profile4,
    },
    cost: "$860",
  },
  {
    user: {
      name: "Arosuh Uyt",
      image: images.profile3,
    },
    cost: " $6009.00",
  },
];

export default function Activity() {
  const checkType = (type) => {
    if (type === "code") {
      return images.codeCircle;
    } else {
      return images.dollarCircle;
    }
  };
  return (
    <Grid
      container
      alignItems="stretch"
      spacing={3}
      direction="row"
      justifyContent="stretch"
    >
      <Grid item md={8} sm={12} xs={12}>
        <InfoHeader
          title={"Activity"}
          route={{ label: "VIEW ALL ACTIVITY", path: "/" }}
        />
        <div className={`cardBg ${styles.activityWrapper}`}>
          <p className="subtext">RECENT</p>
          <div className={styles.usersListWrapper}>
            <ul className="listUnstyled">
              {USER_SUGGESTIONS.map((item) => (
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
                            <span className="userImage">
                              <img src={item.user.image} alt="profile1" />
                              <img
                                src={checkType(item.type)}
                                alt="profile1"
                                className="subImage"
                              />
                            </span>
                          </div>
                          <div className="rightInfoWrapper">
                            <Stack spacing={"12px"}>
                              <div>
                                <p className="paragraph name">
                                  {item.user.name}
                                </p>
                                <p className="subtitle otherText">
                                  {item.description}
                                </p>
                              </div>
                              <div>
                                <Stack
                                  spacing={"12px"}
                                  direction="row"
                                  alignItems="center"
                                >
                                  <div>
                                    {item.tagsList.map((tag) => (
                                      <Tags type={tag.type} value={tag.value} />
                                    ))}
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

                      <Grid item sx={{ display: { xs: "none", md: "block" } }}>
                        <p className="subtitle"> {item.user.lastActivity}</p>
                      </Grid>
                    </Grid>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Grid>
      <Grid item md={4} sm={12} xs={12}>
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
              {USER_RANKS.map((item) => (
                <li className="listInlineItem heading3">
                  <div className={` ${styles.earnerItem}`}>
                    <UserProfile
                      name={item.user.name}
                      otherText={item.cost}
                      image={item.user.image}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
