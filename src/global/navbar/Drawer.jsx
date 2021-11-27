import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import QuizIcon from "@mui/icons-material/Quiz";
import Copyright from "../Copyright";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import FactCheckIcon from "@mui/icons-material/FactCheck";

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

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key='Home'>
          <ListItemIcon>
            <HomeIcon></HomeIcon>
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>

        <ListItem button key='Atividades'>
          <ListItemIcon>
            <PendingActionsIcon></PendingActionsIcon>
          </ListItemIcon>
          <ListItemText primary='Atividades' />
        </ListItem>

        <ListItem button key='Provas'>
          <ListItemIcon>
            <QuizIcon></QuizIcon>
          </ListItemIcon>
          <ListItemText primary='Provas' />
        </ListItem>

        <ListItem button key='Fórum'>
          <ListItemIcon>
            <MarkUnreadChatAltIcon></MarkUnreadChatAltIcon>
          </ListItemIcon>
          <ListItemText primary='Fórum' />
        </ListItem>

        <ListItem button key='Resultados'>
          <ListItemIcon>
            <FactCheckIcon></FactCheckIcon>
          </ListItemIcon>
          <ListItemText primary='Resultados' />
        </ListItem>

        <ListItem button key='Sair'>
          <ListItemIcon>
            <LogoutIcon></LogoutIcon>
          </ListItemIcon>
          <ListItemText primary='Sair' />
        </ListItem>
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
          <Copyright></Copyright>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
