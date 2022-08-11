import { useState } from "react";
import axios from 'axios';
import { Grid } from "@mui/material";
import GameSearchCard from "../pages/Search/searchComponents/GameSearchCard";

const BGA_CLIENT_ID = process.env.REACT_APP_BGA_CLIENT_ID;

export default function useSearchData(props) {
  const [data, setData] = useState([])
  const [input, setInput] = useState("")

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
    let userInput = encodeInput(input)
    let apiURL = `https://api.boardgameatlas.com/api/search?name=${userInput}&fuzzy_match=true&limit=10&client_id=${BGA_CLIENT_ID}`

    axios.get(apiURL)
      .then((info) => {
        setData(info.data.games)
      })
  }

  let gameSearchResults = data.map((game) => {
    return (
      <Grid key={game.id} item xs={11} sx={{ p: 2 }}>
        <GameSearchCard
          gameId={game.id}
          img={game.images.large}
          min_players={game.min_players}
          max_players={game.max_players}
          name={game.name}
          description={game.description}
          addGame={() => props.addGame(props.state.user.id, game.id, game)}
          removeGame={() => props.removeGame(props.user.id, game.id)}
        />
      </Grid>
    )
  });


  
  return {
    gameSearch,
    data,
    setInput,
    gameSearchResults
  }

};