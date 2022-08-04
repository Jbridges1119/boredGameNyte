import { useState, useEffect } from "react";
import axios from 'axios';
import GameCard from './homeComponents/GameCard'

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    Promise.all([
      axios.get('https://api.boardgameatlas.com/api/search?name=azul&fuzzy_match=true&limit=10&client_id=e542YioTdP')
    ])
      .then((all) => {
        setData(all)
      })
  }, []);

  console.log('data:', data);
  let gameSearchResults = data[0].map((game) => {
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
        {youtubeSearchResults}
      </div>
    </div>
   );
}
 
export default Home;