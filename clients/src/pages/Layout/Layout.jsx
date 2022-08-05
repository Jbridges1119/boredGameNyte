import {
  CalendarMonth,
  Person,
  Search,
} from "@mui/icons-material";
import {
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
    path: "/"
},
{
    text: "Game Search",
    icon: <Search />,
    path: "/"
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
    <Box sx={{ display: 'flex' }}>
      <CssBaseline enableColorScheme={true}/>
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
          <img src="https://i.imgur.com/XVw5c7s.png" width="300" height="300" alt="THIS IS GONNA BE A LOGO SOMEDAY"/>
        </Toolbar>
        <Divider />
        <List>
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
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />
      </Box>
    
      {/* Main Content */}
      <div className="content">
        { props.children }
      </div>
    </Box>
  );

  
};

export default Layout;