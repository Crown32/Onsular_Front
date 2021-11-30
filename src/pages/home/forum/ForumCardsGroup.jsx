import { Grid, Paper, Avatar, AvatarGroup } from "@mui/material";
import React from "react";
import "./style/forumCards.css";
import { Box } from "@mui/system";
import { useState } from "react";

export default function ForumCardGroup({
  avatarList,
  title,
  openDate,
  lastMessageDate,
}) {
  const [elevation, setElevation] = useState(24);

  return (
    <Grid className='forumCard' item lg='6' sm='12'>
      <Paper
        onMouseEnter={() => setElevation(6)}
        onMouseLeave={() => setElevation(24)}
        className='paper'
        elevation={elevation}
      >
        <AvatarGroup max='3'>
          <Avatar src={avatarList[0]}></Avatar>
          <Avatar src={avatarList[1]}></Avatar>
          <Avatar src={avatarList[2]}></Avatar>
          <Avatar src={avatarList[3]}></Avatar>
        </AvatarGroup>
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
