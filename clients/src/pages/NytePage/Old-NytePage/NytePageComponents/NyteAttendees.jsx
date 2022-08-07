import { Card, Paper, CardHeader,CardContent, ListItemAvatar, ListItem, ListItemText ,Avatar,  } from "@mui/material";
import theme from "../../../assets/theme"
import Grid from "@mui/material/Grid";
import Person from "@mui/icons-material/Person";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import HelpIcon from '@mui/icons-material/Help';
import CancelIcon from '@mui/icons-material/Cancel';

const NyteAttendees = () => {

  const attending = [
    {
      name: "The Professor",
      email: "TheProfessor@gmail.com",
    },
    {
      name: "Zoidberg",
      email: "Zoidberg@gmail.com",
    },
    {
      name: "Bender",
      email: "BenderIsGreat@gmail.com",
    },
    {
      name: "Turanga Leela",
      email: "Oneye@gmail.com",
    },
    {
      name: "Amy Wong",
      email: "superrich@gmail.com",
    },
    {
      name: "Amy Wong",
      email: "superrich@gmail.com",
    }, 
    {
      name: "Amy Wong",
      email: "superrich@gmail.com",
    }, 
    {
      name: "Amy Wong",
      email: "superrich@gmail.com",
    }, 
    {
      name: "Amy Wong",
      email: "superrich@gmail.com",
    }, 
    {
      name: "Amy Wong",
      email: "superrich@gmail.com",
    }, 
  ];
 
          
    


  
  const attendingList = attending.map((friend) => {
    
    return (
      <ListItem sx={{p: 0}}
      >
        <CancelIcon sx={{ width: 26, height: 26,color: 'darkred', px:2 }}/>
          <HelpIcon sx={{ width: 26, height: 26, px:2 }}/> 
            <CheckCircleIcon color="success"sx={{ width: 26, height: 26, px:2 }}/> 
        <ListItemAvatar>
          <Avatar sx={{ width: 26, height: 26, pt: 0 }}>
            <Person />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={friend.name}  />
      </ListItem>
    );
        
  });
  






  const card = <>
  
  <Card
        sx={{
          height: 265,
          backgroundColor: theme.palette.secondary.main,
          borderRadius: '15px' 
        }} >
          <CardHeader  title="Friends List" />
       <CardContent >
       <Grid container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center" >
          <Grid item xs={5}>
           
             
              {attendingList}
              </Grid>
        {/* <Grid item xs={5}>
        {friendsList}
        </Grid> */}
        </Grid>
        </CardContent>
      </Card>
  </>;



    
    return (
      <Paper sx={{ borderRadius: "20px" }} elevation={4} >
         
        {card}
        
      </Paper>
    );
  };
  

 
export default NyteAttendees;