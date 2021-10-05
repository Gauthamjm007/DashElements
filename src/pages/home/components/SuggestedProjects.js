import { Stack, Grid } from "@mui/material";
import styles from "../../../assets/styles/home.module.scss";
import { images } from "../../../constants";
import { Tags } from "../../../shared_ui_components";
import { InfoHeader } from ".";
import UserProfile from "../../../shared_ui_components/UserProfile";

const USER_SUGGESTIONS = [
  {
    user: {
      name: "Alice Martin",
      lastActivity: "5 hours ago",
      image: images.profile2,
    },

    tag: "html",
    tagsList: [
      {
        type: "eth",
        value: "1.2",
      },
      {
        type: "btc",
        value: "0.3",
      },
    ],
    cost: "$760",
    description:
      "Design and develop a website for an educational platform focusing on the growth of children.",
  },
  {
    user: {
      name: "Alberto Donko",
      lastActivity: "Yesterday, 9:40pm",
      image: images.profile1,
    },
    tag: "ruby",
    tagsList: [
      {
        type: "eth",
        value: "3",
      },
      {
        type: "btc",
        value: "1",
      },
    ],
    cost: "$3360",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    user: {
      name: "Alexander Goe",
      lastActivity: "Yesterday, 2:00pm",
      image: images.profile4,
    },

    tag: "ruby",
    tagsList: [
      {
        type: "eth",
        value: "1",
      },
      {
        type: "btc",
        value: "0.2",
      },
    ],
    cost: "$620",
    description:
      "Scrambled it to make a type specimen book. It has survived not only five centuries.",
  },
];

export default function SuggestedProjects() {
  return (
    <div className={styles.infoWrapper}>
      <InfoHeader
        title={"Suggested Projects"}
        route={{ label: "VIEW ALL PROJECTS", path: "/" }}
      />
      <div className={styles.suggestedProjectsList}>
        <Grid container spacing={3}>
          {USER_SUGGESTIONS.map((item) => (
            <Grid item md={4} sm={6} xs={12}>
              <div className={`${styles.suggestedProjectCard} cardBg`}>
                <Stack direction="row" justifyContent="space-between" mb="10px">
                  <div>
                    <UserProfile
                      name={item.user.name}
                      otherText={item.user.lastActivity}
                      image={item.user.image}
                    />
                  </div>
                  <div>
                    <Tags value={item.tag} />
                  </div>
                </Stack>
                <p className={`${styles.description} paragraph`}>
                  {item.description}
                </p>
                <div className={`${styles.bottomInfo}`}>
                  <Grid container justifyContent="space-between">
                    <Grid item xs={8}>
                      <Stack spacing="12px" direction="row">
                        {item.tagsList.map((curr) => (
                          <Tags value={curr.value} type={curr.type} />
                        ))}
                      </Stack>
                    </Grid>
                    <Grid item xs={4} className="textRight">
                      <h3 className="heading3">{item.cost}</h3>
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
