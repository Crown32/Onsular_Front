import React from "react";
import Calendar from "./Calendar";
import { Container, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import PendingActions from "@mui/icons-material/PendingActions";
import Quiz from "@mui/icons-material/Quiz";
import MarkUnreadChatAlt from "@mui/icons-material/MarkUnreadChatAlt";
import FactCheck from "@mui/icons-material/FactCheck";
import Card from "./Card";
import "./style/home.css";
import Graph from "./Graph";

export default function Home() {
  const mdIcon = {
    fontSize: "50px",
  };

  return (
    <Container maxWidth='false'>
      <Grid container>
        <Grid className='calendarContainer' item xs='12' lg='6'>
          <Calendar></Calendar>
        </Grid>

        <Grid className='cardsGrid' container item xs>
          <Card
            name='Atividades'
            icon={<PendingActions sx={mdIcon}></PendingActions>}
          ></Card>
          <Card name='Provas' icon={<Quiz sx={mdIcon}></Quiz>}></Card>
          <Card
            name='Fórum'
            icon={<MarkUnreadChatAlt sx={mdIcon}></MarkUnreadChatAlt>}
          ></Card>
          <Card
            name='Resultados'
            icon={<FactCheck sx={mdIcon}></FactCheck>}
          ></Card>
        </Grid>
      </Grid>
      <Graph></Graph>
    </Container>
  );
}
