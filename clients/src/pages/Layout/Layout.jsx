import {
  CalendarMonth,
  Casino,
  Person,
  Search,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar
} from "@mui/material";
import theme from "../../assets/theme";
import React from "react";
import '../../styles/Sidebar.css'
import { ClassNames } from "@emotion/react";

const drawerWidth = 360;
const sidebarButtonStyle = {
  backgroundColor: theme.palette.secondary.main,
  p: 0,
  boxShadow: theme.shadows
};

const menuItems = [{
    text: "Profile",
    icon: <Avatar />,
    path: "/"
},
{
    text: "Your Game Nytes",
    icon: <CalendarMonth />,
    path: "/gamenytes"
},
{
    text: "Game Search",
    icon: <Search />,
    path: "/search"
},
{
    text: "Game Collection",
    icon: <Casino />,
    path: "/collection/:user_id"
}
]

// const sideBarLinks = menuItems.map((item) => {
//   <ListItem
//   key={item.text}
//   sx={sidebarButtonStyle}>
//      <ListItemButton>
//        <ListItemIcon>
//          {item.icon}
//        </ListItemIcon>
//        <ListItemText primary={item.text} />
//      </ListItemButton>
//   </ListItem>
// })

const Layout = (props) => {

  return (
    <Box component="div" sx={{ display: 'flex' }}>
      <Drawer
        theme={theme}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: theme.palette.primary.main,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ p: 0, alignContent: "left"}}>
          <img src="https://i.imgur.com/9fxI7kC.jpg" width="300" height="200" alt="THIS IS GONNA BE A LOGO SOMEDAY"/>
        </Toolbar>
        <Divider />
        <List>
          {/* CTA Button */}
        <ListItem sx={{ pl: 0, pr: 0, pb: 4}}>
          <ListItemButton sx={{ textAlign: "center", backgroundColor: theme.palette.error.main }}>
            <ListItemText primary="Create your Game Nyte!" />
          </ListItemButton>
       </ListItem>
        {/* List links */}
        <ListItem sx={sidebarButtonStyle}>
          <ListItemButton>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem sx={sidebarButtonStyle}>
          <ListItemButton>
              <ListItemIcon>
                <CalendarMonth />
              </ListItemIcon>
            <ListItemText primary="Your Game Nytes" />
          </ListItemButton>
        </ListItem>
        <ListItem sx={sidebarButtonStyle}>
          <ListItemButton>
              <ListItemIcon>
                <Search />
              </ListItemIcon>
            <ListItemText primary="Game Search" />
          </ListItemButton>
        </ListItem>


        </List>
      </Drawer>
    
      {/* Main Content */}
        { props.children }
    </Box>
  );

  
};

export default Layout;