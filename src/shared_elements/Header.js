import { Container, Grid } from "@mui/material";
import { images } from "../constants/";
import { Notification, ProfileDropdown } from "../shared_ui_components";

export default function Header() {
  return (
    <header>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item md={6} sx={{ display: { xs: "none", md: "inline-flex" } }}>
            <ul className="listInline logoBox">
              <li className="listInlineItem mr8">
                <img src={images.logo} alt="logo" />
              </li>
              <li className="listInlineItem">
                <span className="paragraph logoWrapper">
                  Dash
                  <p>Elements</p>
                </span>
              </li>
            </ul>
          </Grid>
          <Grid item md={6} sx={{ display: { xs: "inline-flex", md: "none" } }}>
            <ul className="listInline logoBox">
              <li className="listInlineItem">
                <img src={images.sandWitch} alt="logo" className="menuIcon" />
              </li>
              <li className="listInlineItem mr8">
                <img src={images.logo} alt="logo" />
              </li>
            </ul>
          </Grid>
          <Grid item md={6} className={"textRight"}>
            <Grid
              container
              spacing={4}
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Grid item sx={{ display: { xs: "none", md: "inline-flex" } }}>
                <Notification count={3} />
              </Grid>
              <Grid item>
                <ProfileDropdown name={"Alex Croft"} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
}
