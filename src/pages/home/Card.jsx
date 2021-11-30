import React from "react";
import { Grid, Paper } from "@mui/material";
import "./style/cards.css";
import { useState } from "react";
import { Link } from "react-router-dom";

//TODO: Fazer a animação de hover no css mesmo
export default function Card({ name, icon, link }) {
  const [elevation, setElevation] = useState(24);

  return (
    <Grid className='cardsContainer' item xs='6' sm='3' lg='6'>
      <Link to={link}>
        <Paper
          className='cards'
          elevation={elevation}
          onMouseEnter={() => setElevation(6)}
          onMouseLeave={() => setElevation(24)}
        >
          {icon}
          <h3>{name}</h3>
        </Paper>
      </Link>
    </Grid>
  );
}
