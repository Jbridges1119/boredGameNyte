import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {   Button, CardActionArea, Grid, Paper, Stack } from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';
import theme from '../../../../assets/theme';
import BGN from '../../../../assets/Pictures/BGN.png'
import { Box } from '@mui/system';
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

const GameBanner = () => {
  return ( 
    <>
    
    <Grid container 
        direction="column"
        justifyContent="center"
        alignItems="center">
          <Grid item xs={8}>
    <Box
    sx={{
      maxWidth: '250px',
      borderRadius: "20px",
      backgroundColor: theme.palette.primary.main,
     
      display: 'flex',
      justifyContent:'center',
      alignContent:'center',
    }}
    > 
    
    <CardMedia
        component="img"
        image={BGN}
        alt="BGN"
        sx={{
          objectFit: 'contain',
          maxWidth: '125px',
          maxHeight: '125px'
        }}
        />
    
    </Box>
    </Grid>
    <Grid item xs={4}>
    <Typography variant="body2" align='center' sx={{mt:1,fontSize: '18px', color: "#FFFFFF",borderRadius: "20px", maxWidth: '200px' }} >
          Game Name with long name
    </Typography>
    </Grid></Grid>
    </>
   );
}
 
export default GameBanner;