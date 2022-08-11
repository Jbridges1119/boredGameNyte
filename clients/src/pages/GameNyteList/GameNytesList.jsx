import { useState, useEffect } from "react";
import axios from 'axios';
import GameNyteCard from './gameNyteListComponents/GameNyteCard';
import { Grid, List, ListItem, Stack } from "@mui/material";
import theme from "../../assets/theme";
import '../../styles/GameNyteList.css'
import { Box } from "@mui/system";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { getGameById, formatDate, formatTime } from "../../helperFunctions/helperFunctions"



const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid ${theme.palette.primary.main}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "2rem", color: "#FFFFFF" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "20px",
  backgroundColor: theme.palette.secondary.main,
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  border: "none",
}));

const GameNyteList = (props) => {
  const [expanded, setExpanded] = useState('panel1');
  
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [gameNytes, setGameNytes] = useState({
    hosted: [],
    invited: [],
    collection: []
  });

  useEffect(() => {
      if (!props.state.user) {
        return  
      }
      let user_id = props.state.user.id;
      console.log("props:", props)
      Promise.all([
        axios.get(`http://localhost:3005/api/gamenytes/host/${user_id}/all`),
        axios.get(`http://localhost:3005/api/gamenytes/invited/${user_id}/`)
      ])
      .then((all) => {
        setGameNytes((prev) => {
          return { ...prev, hosted: all[0].data, invited: all[1].data }
        })
      })
    }, [props.state.user]);


  return ( 
    <Box sx={{
      pt:2.5,
      width: "100%",
      
      backgroundColor: theme.palette.primary.dark }}>
      <Grid container 
      justifyContent="center" 
      alignItems="center" 
      >
        <Grid item xs={10}>
        <Accordion sx={{
          
          borderRadius: "20px",
          backgroundColor: theme.palette.primary.dark,
        }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary 
              aria-controls="panel1a-content"
              id="panel1a-header" >
          <Typography sx={{ color: "#FFFFFF" }} variant="h5">Upcoming Game Nytes</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ borderRadius: "20px", height: '75vh' }}>
        <List
        sx={{
          
          width: "100%",
          height: '100%',
          position: "relative",
          overflow: "auto",
          borderRadius: "20px",
     

 
        }}
      >
        {/* upcoming */}
        {gameNytes.invited.map((nyte) => {
          if (nyte.status === 'Scheduled') {
        
            const date = formatDate(nyte.date)
            const time = formatTime(nyte.date)
            return (
              <ListItem
                key={nyte.id}
              >
                <GameNyteCard
                  id={nyte.id}
                  first_name={nyte.first_name}
                  last_name={nyte.last_name}
                  title={nyte.title}
                  comp={nyte.competitive}
                  status={nyte.status}
                  location={nyte.location}
                  date={date}
                  time={time}
                  game1={getGameById(props.state.globalCollection, nyte.bgatlas_game_1)}
                  game2={getGameById(props.state.globalCollection, nyte.bgatlas_game_2)}
                  game3={getGameById(props.state.globalCollection, nyte.bgatlas_game_3)}
                />
              </ListItem>
            )
          }
          return null;
        })}
        
      </List>
          
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
        
          borderRadius: "20px",
          backgroundColor: theme.palette.primary.dark,
        }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{ color: "#FFFFFF" }} variant="h5">Game Nytes You've Hosted</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ borderRadius: "20px", height: '75vh'}}>
      
        <List
        sx={{
          
          width: "100%",
          height: '100%',
          position: "relative",
          overflow: "auto",
          borderRadius: "20px",
       

 
        }}
      >
        
        
        {/* Hosted */}
        {gameNytes.hosted.map((nyte) => {
          
            const date = formatDate(nyte.date)
            const time = formatTime(nyte.date)
            return(
              <ListItem
                key={nyte.id}
              >
                <GameNyteCard
                  id={nyte.id}
                  first_name={nyte.first_name}
                  last_name={nyte.last_name}
                  title={nyte.title}
                  comp={nyte.competitive}
                  status={nyte.status}
                  location={nyte.location}
                  date={date}
                  time={time}
                  game1={getGameById(props.state.globalCollection, nyte.bgatlas_game_1)}
                  game2={getGameById(props.state.globalCollection, nyte.bgatlas_game_2)}
                  game3={getGameById(props.state.globalCollection, nyte.bgatlas_game_3)}
                />
              </ListItem>
            )
        })}
        
      </List>
      
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
          borderRadius: "20px",
          backgroundColor: theme.palette.primary.dark,
        }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{ color: "#FFFFFF" }} variant="h5">Game Nytes You've Attended</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ borderRadius: "20px", height: '75vh', }}>
        <List
        sx={{
          
          width: "100%",
          height: '100%',
          position: "relative",
          overflow: "auto",
          borderRadius: "20px",
       

 
        }}
      >
      {/* invited */}
      {gameNytes.invited.map((nyte) => {
          if (nyte.status === 'complete') {
            
            const date = formatDate(nyte.date)
            const time = formatTime(nyte.date)
            return(
              <ListItem
                key={nyte.id}
              >
                <GameNyteCard
                  id={nyte.id}
                  first_name={nyte.first_name}
                  last_name={nyte.last_name}
                  title={nyte.title}
                  comp={nyte.competitive}
                  status={nyte.status}
                  location={nyte.location}
                  date={date}
                  time={time}
                  game1={getGameById(props.state.globalCollection, nyte.bgatlas_game_1)}
                  game2={getGameById(props.state.globalCollection, nyte.bgatlas_game_2)}
                  game3={getGameById(props.state.globalCollection, nyte.bgatlas_game_3)}
                />
              </ListItem>
            )
          }
          return null;
        })}
        
      </List>
        </AccordionDetails>
      </Accordion>
        </Grid>
      </Grid>
    </Box>
  );
}
 
export default GameNyteList;




// {/* <Grid container 
//       justifyContent="center" 
//       alignItems="center" 
//       >
//         <Grid item xs={10}>
//           <Stack >
            
//               <h2>Upcoming Game Nytes</h2>
            
//             {/* Map these out from database  (if date < today or something) */}
//               <GameNyteCard 
//               />
//             <div>
//               <h2>Game Nytes You've Hosted</h2>
//             </div>
//             {/* Map these out from database, also */}
//               <GameNyteCard 
//               />
//             <div>
//               <h2>Game Nytes You've Attended</h2>
//             </div>
//               {/* Map these out from database, too */}
//               <GameNyteCard
//               />
//           </Stack>
//         </Grid>
//       </Grid> */}