import { useState, useEffect } from "react";
import axios from 'axios';
import GameCard from './homeComponents/GameCard'

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
      axios.get('https://api.boardgameatlas.com/api/search?name=Catan&client_id=JLBr5npPhV')
      .then((all) => {
        setData(all)
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
      
        {gameSearchResults}
      

    </div>
   );
}
 
export default Home;