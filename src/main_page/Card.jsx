import React from "react";
import { Grid, Paper } from "@mui/material";
import "./style/cards.css";
import { useState } from "react";

//TODO: Fazer a animação de hover no css mesmo
export default function Card({ name, icon }) {
  return (
    <Grid className='cardsContainer' item xs='6' sm='3' lg='6'>
      <Paper className='cards' elevation='12'>
        {icon}
        <h3>{name}</h3>
      </Paper>
    </Grid>
  );
}
