import * as React from 'react';
import Paper from '@mui/material/Paper';

import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Grid, Box, Stack } from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';
import theme from '../../../assets/theme';
import { Link } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";

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



export default function GameCollectionCard(props) {



  return (
    
    <Paper direction="row"  sx={{
      maxWidth: '100% !important',
      backgroundColor: theme.palette.primary.main,
      color: "white",
      ml: 11,
      borderRadius: "20px"
      
    }}elevation={4}>
      
<Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          
        >
          <Grid item xs={11.5}  >
          <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          py={2}
        >
          <Grid item xs={3.5}>
            {/* Picture */}
          <Box
sx={{
  width: "100%",
  borderRadius: "20px",
  backgroundColor: theme.palette.primary.dark,
  height: '215px',
  display: 'flex',
  justifyContent:'center',
  alignContent:'center',
  alignItems: 'center',
  
  
}}
> 
<CardMedia
    component="img"
    image={props.img}
    alt=""
    sx={{
      objectFit: 'contain',
      maxWidth: '200px',
      maxHeight: '190px'
    }}
    />

</Box>
</Grid>
<Grid item xs={0.25}></Grid>
<Grid item xs={8.25}>


<Stack spacing={5}>
          <Typography sx={{color: "#FFFFFF"}} align="center"  variant="h4">{props.name}</Typography>
            
      <Box sx={{display: 'flex', justifyContent:'space-between', width:'100%'}}container
          direction="row"
          justifyContent="space-between"
          alignItems="center">
            <Button variant="contained" sx={{
                    backgroundColor: theme.palette.error.main,
                    height: 40,
                    fontSize: 20,
                    borderRadius: "20px",
                    color:'error'
                  }}>Remove From Collection</Button>
         
     
            <Button variant="contained" component={Link} to={'/game/' + props.gameId} sx={{
                    backgroundColor: theme.palette.error.main,
                    height: 40,
                    fontSize: 20,
                    borderRadius: "20px",
                    color:'white'
                  }}>View More Details</Button>
            </Box></Stack>
            </Grid></Grid></Grid></Grid>
    </Paper>
  
  );
}
