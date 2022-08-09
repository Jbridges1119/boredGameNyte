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
import { ArrowDownward } from "@mui/icons-material";



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

const GameNyteList = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

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
      
      <ListItem>
        <GameNyteCard/>
        </ListItem>
        <ListItem>
        <GameNyteCard/>
        </ListItem>
        <ListItem>
        <GameNyteCard/>
        </ListItem>
        <ListItem>
        <GameNyteCard/>
        </ListItem>
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
        
        
        
        <ListItem>
        <GameNyteCard/>
        </ListItem>
        <ListItem>
        <GameNyteCard/>
        </ListItem>
        <ListItem>
        <GameNyteCard/>
        </ListItem>
        <ListItem>
        <GameNyteCard/>
        </ListItem>
        
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
        <ListItem>
        <GameNyteCard/>
        </ListItem>
        <ListItem>
        <GameNyteCard/>
        </ListItem>
   
        
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