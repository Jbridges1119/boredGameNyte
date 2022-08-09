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
    <Stack>
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
    <Typography variant="body2" sx={{ color: "#FFFFFF",borderRadius: "20px" }} p={3}>
          The game name is really long like lord
    </Typography>
    </Stack>
    </>
   );
}
 
export default GameBanner;