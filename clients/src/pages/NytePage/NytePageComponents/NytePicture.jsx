import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Paper, Box } from "@mui/material";
import theme from "../../../assets/theme"
import myImage from './Pictures/BGN.png'

export default function NytePicture() {

  const card = <img src={myImage} width="265" height="265"  alt="Competitive"/>


  return (
    <Paper component='div' sx={{ borderRadius: "20px",display: "flex", justifyContent: 'center'  }}  >
   {card}
  </Paper>
  );
}