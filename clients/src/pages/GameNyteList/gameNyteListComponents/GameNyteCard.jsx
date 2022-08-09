import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {   AccordionDetails, Button, CardActionArea, Grid, Paper } from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';
import theme from '../../../assets/theme';
import BGN from '../../../assets/Pictures/BGN.png'
import { Box } from '@mui/system';
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import GameBanner from './GameNyteCardComponents/GameBanner';
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
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

export default function GameNyteCard(props) {
  

  return (
    <Card direction="row" sx={{ 
      backgroundColor: theme.palette.primary.main,
      width: "100%",
      borderRadius: "20px",
      
      display: 'flex',
      justifyContent:'center',
      alignContent:'center',

      }}>
      <CardActionArea>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={11.5}> 
        <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={2.5} > 
<Box
sx={{
  width: "100%",
  borderRadius: "20px",
  backgroundColor: theme.palette.primary.dark,
  height: '180px',
  display: 'flex',
  justifyContent:'center',
  alignContent:'center',
  alignItems: 'center',
  my:1.5
  
}}
> 

<CardMedia
    component="img"
    image={BGN}
    alt="BGN"
    sx={{
      objectFit: 'contain',
      maxWidth: '155px',
      maxHeight: '155px'
    }}
    />

</Box>
</Grid>
<Grid item xs={0.25}>

</Grid>
<Grid item xs={9.25} 
       >
<Typography sx={{ color: "#FFFFFF",borderRadius: "20px" }} pt={2} variant="h5" >Game Nyte Title</Typography>
<Typography sx={{ color: "#FFFFFF",borderRadius: "20px" }}  variant="h6" >Hosted By Johhny Johnson At Location</Typography>


<Typography sx={{ color: "#FFFFFF",borderRadius: "20px" }}  variant="h6" >Date Time</Typography>


          <Accordion borderTopLeftRadius="20px" sx={{
              backgroundColor: theme.palette.secondary.main,borderRadius: "20px", color:'white'
            }}>
              <AccordionSummary 
              expandIcon={<ArrowDownward sx={{
                color: 'white', 
                borderRadius: "20px"
              }}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              >
                <Typography sx={{ color: "#FFFFFF",borderRadius: "20px" }} pl={1} variant="h5" >Games</Typography>
              </AccordionSummary >
              <AccordionDetails sx={{ 
      backgroundColor: theme.palette.primary.main,
      width: "100%",
      borderRadius: "20px",
      height: '210px',
      display: 'flex',
      justifyContent:'center',
      alignContent:'center',

      }}>
              
              <GameBanner/>
              <GameBanner/>
              <GameBanner/>
              </AccordionDetails>
            </Accordion>
            
            </Grid></Grid>
          </Grid>
          </Grid> 
          </CardActionArea>
    </Card>
  );
}


{/* <Accordion sx={{
          borderRadius: "20px",
          backgroundColor: theme.palette.secondary.main,
        }}>
              <AccordionSummary
              expandIcon={<ArrowDownward />}
              aria-controls="panel1a-content"
              id="panel1a-header"
             
              >
                <Typography sx={{ color: "#FFFFFF" }} variant="h5">Hosted Games</Typography>
              </AccordionSummary>
              <Typography variant="h5" sx={{ color: "#FFFFFF" }}>
                This is where we will see what games were played at this game nyte!
              </Typography>
            </Accordion> */}