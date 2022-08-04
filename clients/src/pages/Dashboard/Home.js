import { useState, useEffect } from "react";
import axios from 'axios';
import GameCard from './homeComponents/GameCard';
import { google } from 'googleapis';

const BGA_CLIENT_ID = process.env.REACT_APP_BGA_CLIENT_ID;
const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
const apiUrl = "https://www.googleapis.com/youtube/v3";
const youtube = google.youtube({
  version: "v3",
  auth: apiKey,
});

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
      axios.get(`https://api.boardgameatlas.com/api/search?name=risk&fuzzy_match=true&limit=10&client_id=${BGA_CLIENT_ID}`)
        .then((info) => {
          setData(info.data.games)
        })
  }, []);

  console.log('data:', data);
  let gameSearchResults = data.map((game) => {
    return(
    <GameCard
    key={game.id}
    img={game.images.small}
    name={game.name}
    description={game.description}
    />
    )
  });

  // let youtubeSearchResults = data[1].map((video) => {
  //   return(
  //   <GameCard
  //   key={video.id}
  //   img={video.thumb}
  //   name={video.name}
  //   description={video.description}
  //   />
  //   )
  // });

  return ( 
    <div>
      <div>
        {gameSearchResults}
      </div>
      <div>
        {/* {youtubeSearchResults} */}
      </div>
    </div>
   );
}
 
export default Home;