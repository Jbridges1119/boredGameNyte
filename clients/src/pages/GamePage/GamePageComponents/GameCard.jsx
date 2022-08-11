import * as React from "react";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import theme from "../../../assets/theme";

import GamePicture from "./CardComponents/GamePicture";
import GameInfo from "./CardComponents/GameInfo";
import { Box } from "@mui/system";

const GameCard = (props) => {
  console.log("gameData: ", props.gameData)
  const card = (
    <React.Fragment>
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
                <GameInfo 
                  state={props.state}
                  addGame={() => props.addGame(props.state.user.id, props.gameData.id, props.gameData)}
                  removeGame={() => props.removeGame(props.state.user.id, props.gameData.id)}
                  gameData={props.gameData} 
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
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
