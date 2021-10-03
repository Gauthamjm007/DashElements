import { Grid } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <header>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={6}></Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </header>
  );
}
