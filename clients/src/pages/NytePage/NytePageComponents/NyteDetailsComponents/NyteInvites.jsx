import { Card, Paper, CardHeader,CardContent, ListItemAvatar, ListItem, ListItemText ,Avatar,  } from "@mui/material";
import theme from "../../../../assets/theme"
import Grid from "@mui/material/Grid";
import Person from "@mui/icons-material/Person";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpIcon from '@mui/icons-material/Help';
import CancelIcon from '@mui/icons-material/Cancel';

const NyteInvites = () => {

  const attending = [
    {
      name: "The ",
      last: "Professor",
      email: "TheProfessor@gmail.com",
      attend_status: null
    },
    {
      name: "Zoidberg",
      last: "Zoidberg",
      email: "Zoidberg@gmail.com",
      attend_status: true
    },
    {
      name: "Bender",
      last: "Bender",
      email: "BenderIsGreat@gmail.com",
      attend_status: false
    },
    {
      name: "Turanga",
      last: "Leela",
      email: "Oneye@gmail.com",
      attend_status: false
    },
    {
      name: "Amy",
      last: "Wong",
      email: "superrich@gmail.com",
      attend_status: null
    },
    {
      name: "Amy",
      last: "Wong",
      email: "superrich@gmail.com",
      attend_status: null
    }, 
    {
      name: "Amy",
      last: "Wong",
      email: "superrich@gmail.com",
      attend_status: false
    }, 
    {
      name: "Amy",
      last: "Wong",
      email: "superrich@gmail.com",
      attend_status: true
    }, 
    
  ];

  const attendingList = attending.map((friend) => {
    
    return (
      <ListItem sx={{p:0}}
      >
        {/* <CancelIcon sx={{ width: 26, height: 26,color: 'darkred', pr:2 }}/> */}
          <HelpIcon sx={{ width: 26, height: 26, pr:2, color: theme.palette.error.main }}/> 
            {/* <CheckCircleIcon sx={{ width: 26, height: 26, pr:2,color: '#00C41F' }}/>  */}
        <ListItemAvatar>
          <Avatar sx={{ width: 26, height: 26, pt: 0 }}>
            <Person />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`${friend.name} ${friend.last}`}  />
      </ListItem>
    );
        
  });



  const card = 
  <Card
        sx={{
          height: 380,
          backgroundColor: theme.palette.secondary.main,
          borderRadius: '15px',
         
        }} >
          <CardHeader align="center" title="Invited" />
       <CardContent >
       <Grid container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center" >
          <Grid item xs={12}>
           
             
              {attendingList}
              </Grid>
        {/* <Grid item xs={5}>
        {friendsList}
        </Grid> */}
        </Grid>
        </CardContent>
      </Card>
 



    
    return (
      <Paper sx={{ borderRadius: "20px", mt: '12px',width: '100%', }} elevation={4} >
         
        {card}
        
      </Paper>
    );
  };








export default NyteInvites;



