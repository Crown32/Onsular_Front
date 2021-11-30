import { Grid, Paper, Avatar, AvatarGroup } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./style/forumCards.css";
import { Badge } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForumCardPersonal({
  avatar,
  title,
  openDate,
  lastMessageDate,
  messageAmount,
}) {
  const [elevation, setElevation] = useState(24);

  return (
    <Grid className='forumCard' item lg='6' sm='12'>
      <Link to='/forum'>
        <Paper
          className='paper'
          elevation={elevation}
          onMouseEnter={() => setElevation(6)}
          onMouseLeave={() => setElevation(24)}
        >
          <Badge
            overlap='circular'
            badgeContent={messageAmount}
            color='success'
          >
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
      </Link>
    </Grid>
  );
}
