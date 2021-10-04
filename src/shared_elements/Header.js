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
          <Grid item xs={6}>
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
          <Grid item xs={6} className={"textRight"}>
            <Grid
              container
              spacing={4}
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Grid item>
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
