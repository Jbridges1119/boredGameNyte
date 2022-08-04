import { useState, useEffect } from "react";
import axios from 'axios';
import GameCard from './homeComponents/GameCard';

const BGA_CLIENT_ID = process.env.REACT_APP_BGA_CLIENT_ID;
const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
const youtubeApiUrl = "https://www.googleapis.com/youtube/v3/search";

const Home = () => {
  const [data, setData] = useState([])
  const [videos, setVideos] = useState([])

  useEffect(() => {
    Promise.all([
      axios.get(`https://api.boardgameatlas.com/api/search?name=risk&fuzzy_match=true&limit=10&client_id=${BGA_CLIENT_ID}`),
      axios.get(`${youtubeApiUrl}?q=risk%20how%20to%20play&key=${apiKey}`)
    ])
        .then((all) => {
          setData(all[0].data.games)
          setVideos(all[1].data.items)
        })
  }, []);

  console.log('data:', data);
  console.log('videos:', videos);
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