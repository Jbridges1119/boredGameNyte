import {
  CalendarMonth,
  Search
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import theme from "../../assets/theme";
import React from "react";
import InboxIcon from '@mui/icons-material/Inbox';
import '../../styles/Sidebar.css'


const Sidebar = (props) => {


  return (
    <Box theme={theme} sx={{ backgroundColor: theme.palette.primary.main, maxWidth: 7000, position: "sticky" }} >
        <img src="src/assets/BGN-Logo.png" alt="THIS IS GONNA BE A LOGO SOMEDAY"/>
      <List p={10000} >
          <ListItem>
            <ListItemButton sx={{ justifyContent: "center", backgroundColor: theme.palette.error.main}}>
              <ListItemText alignItems="center" primary="Create your Game Nyte!" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Avatar />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonth />
              </ListItemIcon>
              <ListItemText primary="Your Game Nytes" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Search />
              </ListItemIcon>
              <ListItemText primary="Game Search" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="wwwwwwwwwwwwwwwwwwwwwwwww" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="wwwwwwwwwwwwwwwwwwwwwwwww" />
            </ListItemButton>
          </ListItem></List>
    </Box>
  );
};

export default Sidebar;