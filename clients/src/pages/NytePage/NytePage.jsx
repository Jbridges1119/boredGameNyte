import * as React from "react";
import Grid from "@mui/material/Grid";

import { Box, Paper, Stack, Typography } from "@mui/material";

import NyteDetails from "./NytePageComponents/NyteDetails";
import GameCard from "./NytePageComponents/GameCard";
import theme from "../../assets/theme";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const NytePage = () => {
  const [data, setData] = useState([]);
  // const [videos, setVideos] = useState([])
  const BGA_CLIENT_ID = process.env.REACT_APP_BGA_CLIENT_ID;
  useEffect(() => {
    Promise.all([
      axios.get(
        `https://api.boardgameatlas.com/api/search?ids=TAAifFP590,OIXt3DmJU0&pretty=true&client_id=JLBr5npPhV`
      ),
      axios.get(
        `https://api.boardgameatlas.com/api/search?ids=Dm71eMcqrp&pretty=true&client_id=${BGA_CLIENT_ID}`
      ),
      axios.get(
        `https://api.boardgameatlas.com/api/search?name=Catan&client_id=JLBr5npPhV`
      ),
    ]).then((all) => {
      setData(all);
      // setVideos(all[1].data.items)
    });
  }, []);

  const game = data.map((game) => {
    console.log(game.data.games[0].id);
    return (
      <GameCard
        key={game.data.games[0].id}
        id={game.data.games[0].id}
        img={game.data.games[0].images.large}
        name={game.data.games[0].name}
      />
    );
  });

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.primary.dark,
        height: "100vh",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={11}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Paper
              sx={{
                backgroundColor: theme.palette.secondary.main,
                borderRadius: "22px",
                m: 1.5,
                pt: 0.75,
                px: 5,
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
              elevation={4}
            >
              <Typography pl={0} variant="h2">
                Super Serious Game Night
              </Typography>
            </Paper>
          </Box>

          <Grid container direction="row">
            <Grid item xs={2.5}>
              <NyteDetails />
            </Grid>
            <Grid item xs={0.5}></Grid>
            <Grid item xs={9}>
              <Stack spacing={3}>{game}</Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NytePage;
