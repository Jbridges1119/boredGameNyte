import { Card, CardContent, Paper, CardHeader, Grid, CardMedia, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import theme from "../../../assets/theme"
import axios from 'axios'
import Game from "./NyteGameListCardGame"
// Grab ID as an Array and feed into each axios call.
const NyteGameListCard = () => {
  const [data, setData] = useState([])
  // const [videos, setVideos] = useState([])
  const BGA_CLIENT_ID = process.env.REACT_APP_BGA_CLIENT_ID;
  useEffect(() => {
    Promise.all([
      axios.get(`https://api.boardgameatlas.com/api/search?ids=TAAifFP590,OIXt3DmJU0&pretty=true&client_id=${BGA_CLIENT_ID}`),
      axios.get(`https://api.boardgameatlas.com/api/search?ids=Dm71eMcqrp&pretty=true&client_id=${BGA_CLIENT_ID}`),
      axios.get(`https://api.boardgameatlas.com/api/search?ids=yZiA3jaqrs&pretty=true&client_id=${BGA_CLIENT_ID}`),
    ])
        .then((all) => {
          setData(all)
          // setVideos(all[1].data.items)
        })
  }, []);



console.log(data)



const game = data.map((game) =>{
console.log(game.data.games[0].images)
console.log(game.data.games[0].name)
console.log(game.data.games[0].name)
  return (
    <Game 
    key={game.data.games.id}
    
    img={game.data.games[0].images.large}
    name={game.data.games[0].name}
    />
  )
})







  const card = <>
  
  <Card
        sx={{
          height: 265,
          backgroundColor: theme.palette.secondary.main,
          borderRadius: '15px' 
        }} >
        <CardHeader sx={{ }} title="Game List" />
        <CardContent>
          <Grid container >
            {game}
          </Grid>
        </CardContent>
      </Card>
  </>;

  
    
    
    return (
      <Paper sx={{ borderRadius: "20px" }} elevation={4} >
        {card}
      </Paper>
    );
  };

export default NyteGameListCard;
