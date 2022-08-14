import * as React from "react";
import Grid from "@mui/material/Grid";
import { Box, Stack } from "@mui/material";
import theme from "../../assets/theme";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import GameCard from "./GamePageComponents/GameCard";
import VideoCard from "./GamePageComponents/VideoCard";
import { useParams } from "react-router-dom";
import GameInfo from "./GamePageComponents/CardComponents/GameInfo";
import { urlRewrite } from "../../helperFunctions/helperFunctions";
import {motion} from 'framer-motion'


const BGA_CLIENT_ID = process.env.REACT_APP_BGA_CLIENT_ID;
const apiKey = process.env.REACT_APP_YOUTUBE_APIKEY;
const youtubeApiUrl = "https://www.googleapis.com/youtube/v3/search";

const GamePage = (props) => {
  const [gameData, setGameData] = useState([]);
  const [videos, setVideos] = useState([
    [{ id: { videoID: "" } }, { id: { videoID: "" } }, { id: { videoID: "" } }],
    [{ id: { videoID: "" } }, { id: { videoID: "" } }, { id: { videoID: "" } }],
  ]);

  const atlasGame = useParams().id;

  useEffect(() => {
    axios
      .get(
        `https://api.boardgameatlas.com/api/search?ids=${atlasGame}&pretty=true&client_id=${BGA_CLIENT_ID}`
      )
      .then((all) => {
         setGameData(all.data.games[0]);
        const youTubeGame = all.data.games[0].name
          .replace(/ /g, "%20")
          .replace(/&/g, "%20");
        Promise.all([
          axios.get(
            `${youtubeApiUrl}?q=${youTubeGame}%20how%20to%20play%20game&maxResults=3&key=${apiKey}`
          ),
         axios.get(
            `${youtubeApiUrl}?q=${youTubeGame}%20tips%20and%20tricks%20game&maxResults=3&key=${apiKey}`
          ),
         ])
        .then((all) => {
          setVideos([all[0].data.items, all[1].data.items]);
        });
      });
  }, []);

  return (
    <motion.div  className="outer" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity: 0}}>
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.primary.dark,
       
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={11} >
          <Stack spacing={4} mt={5} >
            <Box container sx={{
        width: "100%",
        backgroundColor: theme.palette.primary.dark,
       
      }}>
            <GameCard
              gameData={gameData}
              state={props.state}
              addGame={props.addGame}
              removeGame={props.removeGame}
            /> </Box> 
            <VideoCard videos={videos[0]} videos2={videos[1]} />
          </Stack>
        </Grid>
      </Grid>
    </Box>
   </motion.div>
  );
};
export default GamePage;
