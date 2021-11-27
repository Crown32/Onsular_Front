import React from "react";
import Calendar from "./Calendar";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";

export default function Home() {
  return (
    <Grid container xs={{ flexWrap: "wrap" }} spacing='2'>
      <Grid item md='12' lg='6'>
        <Calendar></Calendar>
      </Grid>
    </Grid>
  );
}
