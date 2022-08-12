import { useState } from "react";
import axios from 'axios';
import { Grid } from "@mui/material";
import GameSearchCard from "../pages/Search/searchComponents/GameSearchCard";
import LoadingButton from '@mui/lab/LoadingButton';
import * as React from "react";

const BGA_CLIENT_ID = process.env.REACT_APP_BGA_CLIENT_ID;

export default function useSeachData() {
  const [data, setData] = useState([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = React.useState(false);
  const encodeInput = (string) => {
    let encode = "";

    for (let c of string) {
      if (c === " ") {
        encode += "%20"
      } else {
        encode += c
      }
    }
    return encode;
  }

  const gameSearch = () => {
   setLoading(true)
    let userInput = encodeInput(input)
    let apiURL = `https://api.boardgameatlas.com/api/search?name=${userInput}&fuzzy_match=true&limit=10&client_id=${BGA_CLIENT_ID}`

    axios.get(apiURL)
      .then((info) => {
        setData(info.data.games)
        setLoading(false)
      })
  }

  let gameSearchResults = data.map((game) => {
    return (
      <Grid item xs={11} sx={{ p: 2 }}>
        <GameSearchCard
          key={game.id}
          gameId={game.id}
          img={game.images.large}
          name={game.name}
          description={game.description}
        />
      </Grid>
    )
  });


  
  return {
    gameSearch,
    data,
    setInput,
    gameSearchResults,
    loading
  }

};