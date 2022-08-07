import * as React from "react";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  CardContent,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import theme from "../../../assets/theme";

import { useState } from "react";
import { useEffect } from "react";

import GamePicture from "./CardComponents/GamePicture";
import GameInfo from "./CardComponents/GameInfo";

const GameCard = (props) => {
  const card = (
    <React.Fragment>
      <CardContent
        sx={{
          height: 490,
          backgroundColor: theme.palette.secondary.main,
          borderRadius: "15px",
          display: 'flex',
          justifyContent:'center',
          alignContent:'flex-start',
         
        }}
      >
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
              justifyContent="center"
              alignItems="center"
            >
              
              <Grid item xs={4}>
                <GamePicture picture={props}/>
                </Grid>
                <Grid item xs={0.5}>
               
                </Grid>
                <Grid item xs={7.5}>
                  <GameInfo data={props}/>
                
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </React.Fragment>
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
