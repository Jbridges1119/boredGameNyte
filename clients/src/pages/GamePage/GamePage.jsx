import * as React from "react";
import Grid from "@mui/material/Grid";
import { Box, Stack, Typography } from "@mui/material";
import theme from "../../assets/theme";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import GameCard from "./GamePageComponents/GameCard";
import VideoCard from "./GamePageComponents/VideoCard";
import { ImagesearchRoller } from "@mui/icons-material";

const BGA_CLIENT_ID = process.env.REACT_APP_BGA_CLIENT_ID;
const apiKey = process.env.REACT_APP_YOUTUBE_APIKEY;
const youtubeApiUrl = "https://www.googleapis.com/youtube/v3/search";

const GamePage = (props) => {
  const [data, setData] = useState([]);
  const [videos, setVideos] = useState([
    [{ id: { videoID: "" } }, { id: { videoID: "" } }, { id: { videoID: "" } }],
    [{ id: { videoID: "" } }, { id: { videoID: "" } }, { id: { videoID: "" } }],
  ]);
  const youTubeGame = "azul";
  const atlasGame = 'TAAifFP590'
  useEffect(() => {
    Promise.all([
      axios.get(
        `https://api.boardgameatlas.com/api/search?ids=${atlasGame}&limit=1&client_id=${BGA_CLIENT_ID}`
      ),
      // axios.get(`${youtubeApiUrl}?q=${youTubeGame}%20how%20to%20play%20game&maxResults=3&key=${apiKey}`),
      // axios.get(`${youtubeApiUrl}?q=${youTubeGame}%20trips%20and%20tricks%20game&maxResults=3&key=${apiKey}`)
    ]).then((all) => {
      setData(all[0].data.games);
      // setVideos([all[1].data.items,all[2].data.items])
    });
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.primary.main,
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
          <Stack container spacing={2} mt={4}>
            <GameCard data={data}/>
            <VideoCard videos={videos[0]} videos2={videos[1]} />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GamePage;
