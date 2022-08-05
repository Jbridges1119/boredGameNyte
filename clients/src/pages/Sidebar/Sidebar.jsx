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
    <Box sx={{ display: 'flex', backgroundColor: theme.palette.primary.main }}>
      {/* <CssBaseline enableColorScheme={true}/> */}
      <Drawer
        theme={theme}
        sx={{
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
          <ListItemButton sx={{ textAlign: "center", backgroundColor: theme.palette.error.main}}>
            <ListItemText primary="Create your Game Nyte!" />
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
        sx={{ flexGrow: 1, bgcolor: theme.palette.primary.main, p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Sidebar;