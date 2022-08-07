import * as React from 'react';

import { Paper,  } from "@mui/material";
import theme from "../../../assets/theme"
import myImage from './Pictures/BGN.png'

export default function NytePicture() {

  const card = <img src={myImage} width="265" height="265"  alt="Competitive"/>


  return (
    <Paper component='div' sx={{ borderRadius: "20px",display: "flex", justifyContent: 'center',backgroundColor:theme.palette.secondary.main  }}  >
   {card}
  </Paper>
  );
}