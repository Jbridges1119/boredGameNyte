import { useState, useEffect } from "react";
import axios from 'axios';
import GameCard from './homeComponents/GameCard'

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://api.boardgameatlas.com/api/search?name=Catan&fuzzy_match=true&limit=10&client_id=e542YioTdP')
      .then((res) => {
        setData(res.data.games);
      })
  }, []);

  console.log('data:', data);
  let gameSearchResults = data.map((game) => {
    return(
    <GameCard
    key={game.name}
    img={game.images.small}
    gamename={game.name}
    description={game.description}
    />
    )
  });

  return ( 
    <div>
      {gameSearchResults}
    </div>
   );
}
 
export default Home;