import { Card, Paper, CardHeader,CardContent, ListItemAvatar, ListItem, ListItemText ,Avatar,  } from "@mui/material";
import theme from "../../../../assets/theme"
import Grid from "@mui/material/Grid";
import Person from "@mui/icons-material/Person";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const NyteInvites = () => {

  const attending = [
    {id: 1,
      name: "The ",
      last: "Professor",
      email: "TheProfessor@gmail.com",
      attend_status: null
    },
    {id: 2,
      name: "Zoidberg",
      last: "Zoidberg",
      email: "Zoidberg@gmail.com",
      attend_status: true
    },
    {id: 3,
      name: "Bender",
      last: "Bender",
      email: "BenderIsGreat@gmail.com",
      attend_status: false
    },
    {id: 4,
      name: "Turanga",
      last: "Leela",
      email: "Oneye@gmail.com",
      attend_status: false
    },
    {id: 5,
      name: "Amy",
      last: "Wong",
      email: "superrich@gmail.com",
      attend_status: null
    },
    {id: 6,
      name: "Amy",
      last: "Wong",
      email: "superrich@gmail.com",
      attend_status: null
    }, 
    {id: 7,
      name: "Amy",
      last: "Wong",
      email: "superrich@gmail.com",
      attend_status: false
    }, 
    {id: 8,
      name: "Amy",
      last: "Wong",
      email: "superrich@gmail.com",
      attend_status: true
    }, 
    
  ];

  const attendingList = attending.map((friend) => {
    const status = friend.attend_status

    return (
      <ListItem sx={{p:0}} key={attending.id}
      >
        {status === false && <CloseOutlinedIcon sx={{ backgroundColor: 'darkred',borderRadius: '40px', width: 26, height: 26,color:'white' ,  }}/> }
        {status === null && <QuestionMarkOutlinedIcon sx={{backgroundColor: theme.palette.error.main,borderRadius: '40px', width: 26, height: 26,  color: 'white' }}/> }
            {status === true && <CheckOutlinedIcon sx={{backgroundColor: '#00C41F',borderRadius: '40px', width: 26, height: 26, color: 'white' }}/>  }
        <ListItemAvatar >
          <Avatar  sx={{ width: 26, height: 26, pt: 0, ml:1, pr:0 }}>
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
          backgroundColor: theme.palette.primary.main,
          borderRadius: '15px',
         
        }} >
          <CardHeader align="center" title="Invited" />
       <CardContent >
       <Grid container
          direction="row"
          justifyContent="center"
          alignItems="center" >
          <Grid item xs={12}>
           
             
              {attendingList}
              </Grid>
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



