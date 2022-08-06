import {
  Button,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Stack,
} from "@mui/material";
import theme from "../../../assets/theme";
import BGN from "./Pictures/BGN.png";
import { useState, useEffect } from "react";
import axios from 'axios'
import GameCardData from './NyteGameComponents/GameCardData'

const GameCard = (props) => {


 

  const card = (
    <>
      <CardContent
 
        sx={{
          height: 225,
          backgroundColor: theme.palette.secondary.main,
          borderRadius: "15px",
          display: 'flex',
          justifyContent:'center',
          
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <GameCardData key={props.key}
      img={props.img}
      name={props.name}/>
          </Grid>

        </Grid>
      </CardContent>
    </>
  );
  return (
    <Paper
      sx={{
        borderRadius: "20px",
        width: "100%",
      }}
      elevation={4}
    >
      {card}
    </Paper>
  );
};

export default GameCard;
