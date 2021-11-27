import React from "react";
import { Grid, Paper } from "@mui/material";
import "./style/cards.css";

export default function card({ name, icon }) {
  let cardElevation = 24;

  return (
    <Grid className='cardsContainer' item xs='6' sm='3' lg='6'>
      <Paper className='cards' elevation={cardElevation}>
        {icon}
        <h3>{name}</h3>
      </Paper>
    </Grid>
  );
}
