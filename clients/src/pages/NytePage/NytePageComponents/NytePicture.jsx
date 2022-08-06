import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Paper, Box } from "@mui/material";
import theme from "../../../assets/theme" 

export default function NytePicture() {
  const card = 

                

    <CardMedia
      component="img"
      
      image="https://i.imgur.com/hHmdwtZ.png"
      alt="green iguana"
      sx={{
        maxWidth: 200,
        maxHeight: 200
    
      }}
    />


  return (
    <Box sx={{ borderRadius: "20px", backgroundColor:  theme.palette.primary.main, }} elevation={4} >
   {card}
  </Box>
  );
}