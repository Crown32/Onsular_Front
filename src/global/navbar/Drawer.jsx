import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import QuizIcon from "@mui/icons-material/Quiz";
import Copyright from "../Copyright";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import { Link } from "react-router-dom";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const copyrightStyle = {
    position: "absolute",
    bottom: "5%",
    left: "0",
    right: "0",
  };

  const linkStyle = {
    color: "black",
    textDecoration: "none",
  };

  const list = (anchor) => (
    <Box
      sx={{
        backgroundColor: "var(--background-color-light)",
        height: "100%",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to='/'>
          <ListItem button key='Home'>
            <ListItemIcon>
              <HomeIcon></HomeIcon>
            </ListItemIcon>
            <ListItemText sx={linkStyle} primary='Home' />
          </ListItem>
        </Link>

        <Link to='/activities'>
          <ListItem button key='Atividades'>
            <ListItemIcon>
              <PendingActionsIcon></PendingActionsIcon>
            </ListItemIcon>
            <ListItemText sx={linkStyle} primary='Atividades' />
          </ListItem>
        </Link>

        <Link to='/tests'>
          <ListItem button key='Provas'>
            <ListItemIcon>
              <QuizIcon></QuizIcon>
            </ListItemIcon>
            <ListItemText sx={linkStyle} primary='Provas' />
          </ListItem>
        </Link>

        <Link to='/'>
          <ListItem button key='Fórum'>
            <ListItemIcon>
              <MarkUnreadChatAltIcon></MarkUnreadChatAltIcon>
            </ListItemIcon>
            <ListItemText sx={linkStyle} primary='Fórum' />
          </ListItem>
        </Link>

        <Link to='/'>
          <ListItem button key='Resultados'>
            <ListItemIcon>
              <FactCheckIcon></FactCheckIcon>
            </ListItemIcon>
            <ListItemText sx={linkStyle} primary='Resultados' />
          </ListItem>
        </Link>

        <Link to='/login'>
          <ListItem button key='Sair'>
            <ListItemIcon>
              <LogoutIcon></LogoutIcon>
            </ListItemIcon>
            <ListItemText sx={linkStyle} primary='Sair' />
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        size='large'
        edge='start'
        color='inherit'
        aria-label='left-drawer'
        sx={{ mr: 2 }}
        onClick={toggleDrawer("left", true)}
      >
        <MenuIcon />
      </IconButton>
      <React.Fragment key='left'>
        <Drawer
          elevation='16'
          anchor='left'
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          className='drawer'
        >
          {list("left")}
          <Copyright sx={copyrightStyle}></Copyright>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
