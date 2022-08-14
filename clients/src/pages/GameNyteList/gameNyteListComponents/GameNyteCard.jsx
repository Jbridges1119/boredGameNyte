import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {   AccordionDetails, Button,  Grid, Paper } from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';
import theme from '../../../assets/theme';
import BGN from '../../../assets/Pictures/BGN.png'
import BGNCasual from '../../../assets/Pictures/BGNCasual.png'
import { Box } from '@mui/system';
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import GameBanner from './GameNyteCardComponents/GameBanner';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
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
    <motion.div  className="outer" initial={{x: -300, opacity: 0 }} animate={{x: 0, opacity: 1}} exit={{x: 300, opacity: 0}}>
    <Paper 
      elevation={8}
      sx={{
    
      backgroundColor: theme.palette.secondary.main,
      borderRadius: "20px",
      width:'100%'
    }}>
    <Card direction="row" sx={{ 
      backgroundColor: theme.palette.primary.main,
      width: "100%",
      borderRadius: "20px",
      
      display: 'flex',
      justifyContent:'center',
      alignContent:'center',

      }}>
      
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
    image={props.comp ? BGN : BGNCasual}
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
      sx={{
        flexDirection:'column',
        display: 'flex',
        justifyContent:'center',
        alignContent:'center',
        alignItems: 'center',

        
      }} >
        <Box display='flex' width='100%' justifyContent='space-between'>
<Typography sx={{ color: "#FFFFFF",borderRadius: "20px" }} pt={2} variant="h5" >{props.title}</Typography>
<Button component={Link} to={'/nyte/' + props.id}
                  variant="contained"
                  sx={{
                    ':hover': {
                      bgcolor: theme.palette.error.light,
                      boxShadow:24
                    },':active': {
                      bgcolor: theme.palette.error.light,
                      boxShadow:8
                      
                    },
                    backgroundColor: theme.palette.error.main,
                    height: 40,
                    fontSize: 22,
                    borderRadius: "20px",
                    textTransform: "none",
                    pt:1,
                    mt:1
                  }}
                  type="submit"
             
                >
                  View Details
                </Button>
</Box>
<Typography sx={{ color: "#FFFFFF",borderRadius: "20px" }}  variant="h6" >Hosted By {props.first_name} {props.last_name} At {props.location}</Typography>


<Typography sx={{ color: "#FFFFFF",borderRadius: "20px" }}  variant="h6" >{props.date} {props.time}</Typography>


          <Accordion  sx={{
              backgroundColor: theme.palette.primary.main, borderRadius: "20px", color:'white'
            }}>
              <AccordionSummary sx={{ ':hover': {
                bgcolor: theme.palette.secondary.light, // theme.palette.primary.main
                boxShadow:24
              },
                color: 'white', 
                borderRadius: "20px",
                backgroundColor: theme.palette.secondary.main,
              }}
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
      width: "95%",
      borderRadius: "20px",
      
      display: 'flex',
      justifyContent:'space-around',
      alignContent:'center',

    }}>
              
              <GameBanner name={props.game1 && props.game1.name ? props.game1.name : ''} img={props.game1 && props.game1.thumb_url ? props.game1.thumb_url : "No img"}/>
              <GameBanner name={props.game2 && props.game2.name ? props.game2.name : ''} img={props.game2 && props.game2.thumb_url ? props.game2.thumb_url : "No img"}/>
              <GameBanner name={props.game3 && props.game3.name ? props.game3.name : ''} img={props.game3 && props.game3.thumb_url ? props.game3.thumb_url : "No img"}/>
              </AccordionDetails>
            </Accordion>
            
            </Grid></Grid>
          </Grid>
          </Grid> 
        
    </Card></Paper></motion.div>
  );
}