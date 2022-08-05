import {
  CalendarMonth,
  Search,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import theme from "../../assets/theme";
import React from "react";
import InboxIcon from '@mui/icons-material/Inbox';
import '../../styles/Sidebar.css'

const drawerWidth = 360;

const Sidebar = (props) => {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        theme={theme}
        sx={{
          backgroundColor: theme.palette.primary.main,
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
          <img src="src/assets/BGN-Logo.png" alt="THIS IS GONNA BE A LOGO SOMEDAY"/>
        <Divider />
        <List>
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
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Sidebar;