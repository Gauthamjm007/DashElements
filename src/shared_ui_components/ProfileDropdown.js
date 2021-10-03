import { Grid } from "@mui/material";
import { images } from "../constants";

export default function ProfileDropdown({ name }) {
  return (
    <div className="profileDropdownWrapper">
      <Grid container spacing={2}>
        <Grid item>
          <p className="heading4"> {name}</p>
        </Grid>
        <Grid item>
          <div className="dropDownIcon">
            <img src={images.chevron} alt="chevron" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
