import React from "react";
import Calendar from "./Calendar";
import { Container, Divider, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PendingActions from "@mui/icons-material/PendingActions";
import Quiz from "@mui/icons-material/Quiz";
import MarkUnreadChatAlt from "@mui/icons-material/MarkUnreadChatAlt";
import FactCheck from "@mui/icons-material/FactCheck";
import Card from "./Card";
import "./style/home.css";
import Graph from "./Graph";
import ForumsCardPersonal from "./forum/ForumCardsPersonal";
import ForumsCardGroup from "./forum/ForumCardsGroup";

export default function Home() {
  const mdIcon = {
    fontSize: "50px",
  };

  return (
    <div>
      <Container maxWidth='false' className='topTitle'>
        <Typography className='titleText' variant='h3'>
          Onsular
        </Typography>
        <Typography className='titleSubtext' variant='h6'>
          Seu ambiente acadêmico em apenas um lugar
        </Typography>
        <br></br>
        <Divider></Divider>
      </Container>
      <Grid container>
        <Grid className='calendarContainer' item xs='12' lg='6'>
          <Calendar></Calendar>
        </Grid>

        {/* TODO: Transformar isso aqui em um .map de um array dos dados */}
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
      <Container
        sx={{
          margin: "40px 0",
        }}
        maxWidth='xl'
      >
        <Typography
          sx={{
            marginLeft: "15px",
          }}
          variant='h4'
        >
          Fóruns em aberto
        </Typography>
        <br></br>
        <Divider></Divider>
      </Container>
      <Grid
        container
        className='forumCardsGrid'
        sx={{ padding: "20px", borderRadius: "10px" }}
      >
        <ForumsCardPersonal
          avatar='https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          title='Trabalho de história - Capitalismo'
          openDate='01/12/2021'
          lastMessageDate='21/12/2022'
          messageAmount='8'
        ></ForumsCardPersonal>

        <ForumsCardPersonal
          messageAmount='2'
          openDate='01/12/2021'
          lastMessageDate='Ontem'
          title='Trabalho de geográfia - Urbanização'
          avatar='https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        ></ForumsCardPersonal>
        <ForumsCardGroup
          title='Trabalho de Português - Grámatica'
          openDate='01/12/2021'
          lastMessageDate='Hoje'
          avatarList={[
            "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          ]}
        ></ForumsCardGroup>

        <ForumsCardGroup
          title='Comissão de formatura'
          avatarList={[
            "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          ]}
          openDate='14/02/2021'
          lastMessageDate='21/12/2021'
        ></ForumsCardGroup>
      </Grid>
    </div>
  );
}
