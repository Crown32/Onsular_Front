import { Grid, Paper, Avatar, AvatarGroup } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./style/forumCards.css";
import { Badge } from "@mui/material";

export default function forumCardPersonal({
  avatar,
  title,
  openDate,
  lastMessageDate,
  messageAmount,
}) {
  return (
    <Grid className='forumCard' item lg='6' sm='12'>
      <Paper className='paper' elevation='12'>
        <Badge overlap='circular' badgeContent={messageAmount} color='success'>
          <Avatar src={avatar}></Avatar>
        </Badge>
        <h3>{title}</h3>
        <Box className='dateBox'>
          <small>
            <strong>Data de abertura: </strong>
            {openDate ? openDate : "--/--/----"}
          </small>
          <small>
            <strong>Última mensangem: </strong>
            {lastMessageDate ? lastMessageDate : "--/--/----"}
          </small>
        </Box>
      </Paper>
    </Grid>
  );
}
