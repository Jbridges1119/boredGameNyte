import {
  CalendarMonth,
  Casino,
  Person,
  Search,
  Logout
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar
} from "@mui/material";
import theme from "../../assets/theme";
import React from "react";
import '../../styles/Sidebar.css'
import { Link } from "react-router-dom";
import { ClassNames } from "@emotion/react";
import { useContext } from 'react';
import { authContext } from '../Login/Auth';

const drawerWidth = 360;
const sidebarButtonStyle = {
  backgroundColor: theme.palette.secondary.main,
  p: 0,
  boxShadow: theme.shadows,

};

const menuItems = [{
    text: "Profile",
    icon: <Person  sx={{ color: "white" }}/>,
    path: "/"
},
{
    text: "Your Game Nytes",
    icon: <CalendarMonth sx={{ color: "white" }}/>,
    path: "/gamenytes"
},
{
    text: "Game Search",
    icon: <Search sx={{ color: "white" }}/>,
    path: "/search"
},
{
    text: "Game Collection",
    icon: <Casino sx={{ color: "white" }}/>,
    path: "/collection"
}
]

const sideBarLinks = menuItems.map((item) => {
  return(
    <div key={menuItems.indexOf(item)} style={{ paddingBottom: 10 }}>
      <Link to={item.path}>
        <ListItem
        sx={sidebarButtonStyle}>
          <ListItemButton sx={{  height:'60px', fontSize:'45px' }}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
            <ListItemText primary={item.text} primaryTypographyProps={{fontSize: '20px', pt:0.6}}/>
          </ListItemButton>
        </ListItem>
      </Link>
    </div>
  )
})

const Layout = (props) => {
  const { userId, state, setState, logout, login  } = useContext(authContext);
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
        <Toolbar sx={{ p: 0,pr:0}} >
          <img src="https://i.imgur.com/9fxI7kC.jpg" width="300"  alt="THIS IS GONNA BE A LOGO SOMEDAY"/>
        </Toolbar>
        <Divider />
        <List>
          {/* CTA Button */}
        <Link to="/create">
          <ListItem key='15' sx={{ mt: 3, pl: 0, pr: 0, mb: 4}}>
          <Paper elevation={8} sx={{width:'100%'}}>
            <ListItemButton sx={{ textAlign: "center", backgroundColor: theme.palette.error.main, height:'70px' }}>
              
              <ListItemText primary="Create your Game Nyte!" primaryTypographyProps={{fontSize: '26px', pt:0.6}}/>
            </ListItemButton>
            </Paper>
          </ListItem>
       </Link>
        {/* List links */}
        {sideBarLinks}
          <div style={{ paddingBottom: 10 }}>
            <Link to='/'>
              <ListItem
              sx={sidebarButtonStyle}>
                <ListItemButton onClick={() => logout()} sx={{  height:'60px', fontSize:'45px' }}>
                    <ListItemIcon>
                      <Logout sx={{ color: "white" }}/>
                    </ListItemIcon>
                  <ListItemText primary="Logout" primaryTypographyProps={{fontSize: '20px', pt:0.6}}/>
                </ListItemButton>
              </ListItem>
            </Link>
          </div>
        </List>
      </Drawer>
    
      {/* Main Content */}
        { props.children }
    </Box>
  );

  
};

export default Layout;