import * as React from "react";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import theme from "../../../assets/theme";
import {motion} from 'framer-motion'
import GamePicture from "./CardComponents/GamePicture";
import GameInfo from "./CardComponents/GameInfo";
import { Box } from "@mui/system";

const GameCard = (props) => {
  
  const card = (
  
      <Box
        sx={{
          height: 490,
          backgroundColor: theme.palette.primary.main,
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          alignContent: "flex-start",
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
              <Grid item xs={5}>
                <GamePicture picture={props} />
              </Grid>
              <Grid item xs={0.5}></Grid>

              <Grid item xs={6.5}>
              <motion.div  className="outer" initial={{x: -300, opacity: 0 }} animate={{x: 0, opacity: 1}} exit={{x: 300, opacity: 0}}>
                <GameInfo 
                  state={props.state}
                  addGame={() => props.addGame(props.state.user.id, props.gameData.id, props.gameData)}
                  removeGame={() => props.removeGame(props.state.user.id, props.gameData.id)}
                  gameData={props.gameData} 
                /></motion.div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    
  );
  return (
    <Paper
      sx={{
        borderRadius: "22px",
        width: "100%",
      }}
      elevation={4}
    >
      {card}
    </Paper>
  );
};

export default GameCard;
