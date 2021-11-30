import React from "react";
import { Grid, Paper } from "@mui/material";
import "./style/cards.css";
import { useState } from "react";

//TODO: Fazer a animação de hover no css mesmo
export default function Card({ name, icon }) {
  const [elevation, setElevation] = useState(24);

  return (
    <Grid className='cardsContainer' item xs='6' sm='3' lg='6'>
      <Paper
        className='cards'
        elevation={elevation}
        onMouseEnter={() => setElevation(6)}
        onMouseLeave={() => setElevation(24)}
      >
        {icon}
        <h3>{name}</h3>
      </Paper>
    </Grid>
  );
}
