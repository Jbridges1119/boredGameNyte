import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from 'react';
import { authContext } from '../pages/Login/Auth';
import Cookies from 'js-cookie'

const games = [
  {
    name: "Catan",
    thumbnail: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324722072.jpg",
    min_players: 3,
    max_players: 4,
    id: "OIXt3DmJU0"
  },
  {
    name: "Risk",
    thumbnail: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254847937-51zyVWbt8aL.jpg",
    min_players: 2,
    max_players: 6,
    id: "EL3YmDLY6W"
  },
  {
    name: "Azul",
    thumbnail: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254200327-61EFZADvURL.jpg",
    min_players: 2,
    max_players: 4,
    id: "i5Oqu5VZgP"
  },
  {
    name: "Lords of Waterdeep",
    thumbnail: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324168873.jpg",
    min_players: 2,
    max_players: 5,
    id: "axOr9uuOwN"
  },
  {
    name: "Smash Up",
    thumbnail: "https://cdn.shopify.com/s/files/1/0513/4077/1515/products/smash-up-board-game.jpg?v=1609629158",
    min_players: 2,
    max_players: 4,
    id: "Q3EWjC8Dm7"
  },
  {
    name: "Gloomhaven",
    thumbnail: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254920151-51ulRXlJ7LL.jpg",
    min_players: 1,
    max_players: 4,
    id: "RLlDWHh7hR"
  }
]

const useApplicationData = () => {
  const { userId, state, setState, logout, login, gameNytesHosted,newGameNyte, setNewGameNyte   } = useContext(authContext);

  // This will ideally be the users collection retrieved from database
  // Currently, default state is dummy data stored above
  // Will have to use setCollection with a useEffect later

  // const [newGameNyte, setNewGameNyte] = useState({
  //   host: state.user ? state.user.id : Cookies.get('userId'),
  //   gamesChosen: [],
  //   friendsInvited: [],
  //   competitive: false,
  //   name: '',
  //   place: '',
  //   date: new Date(),
  //   open: false
  // })
  



  // Function to set/unset checked friends in state
  const handleFriendToggle = (value) => () => {
    const currentIndex = newGameNyte.friendsInvited.indexOf(value);
    const newChecked = [...newGameNyte.friendsInvited];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setNewGameNyte(prev => ({ ...prev, friendsInvited: newChecked }));
  };

  // These 4 functions handle the collection dialog, "open" in state
  const handleClickOpen = () => {
    setNewGameNyte(prev => ({ ...prev, open: true }));
  };
  // Click the 'x' to close the dialog without saving state
  const handleClose = () => {
    setNewGameNyte(prev => ({ ...prev, open: false }));
  };

  const handleToggle = (value) => () => {
    const currentIndex = newGameNyte.gamesChosen.indexOf(value);
    const newChecked = [...newGameNyte.gamesChosen];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setNewGameNyte({ ...newGameNyte, gamesChosen: newChecked })
  };

  // From the Create page, this function should remove display cards from the game chooser component
  const toggleOff = (value) => () => {
    const currentIndex = newGameNyte.gamesChosen.indexOf(value);
    const newChecked = [...newGameNyte.gamesChosen];



    if (currentIndex >= 0) {
      newChecked.splice(currentIndex, 1);
    }

    setNewGameNyte(prev => ({ ...prev, gamesChosen: newChecked }));
  };

  // This handles the state of "competitive" with the switch on the create page
  const handleCompSwitch = () => {
    return setNewGameNyte((prev) => {
      return { ...prev, competitive: (newGameNyte.competitive === false ? true : false) }
    })
  }

  const deleteGameFromCollection = (user, gameId) => {

    let gameObj = {}
    for (let g of state.collection) {
      if (g.id === gameId) {
        gameObj = g
      }
    }

    const currentIndex = state.collection.indexOf(gameObj);
    const newUserCollection = [...state.collection];

    if (currentIndex >= 0) {
      newUserCollection.splice(currentIndex, 1);
    }
    
    return axios.delete(`http://localhost:3005/api/gamecollection/${user}/${gameId}`)
    .then(() => {
      setState((prev) => {
        return {...prev, collection: newUserCollection}
      })
    })
  };

  const addGameToCollection = (user, gameId, game) => {

    let newGame = {
      name: game.name,
      min_players: game.min_players,
      max_players: game.max_players,
      thumb_url: game.thumb_url,
      large_url: game.thumb_url,
      id: gameId,
      user: user
    }

    return axios.post(`http://localhost:3005/api/users/${user}/collection`, newGame )
    .then(() => {
      setState((prev) => {
        return {...prev, collection: [...prev.collection, newGame], globalCollection: [...prev.globalCollection, newGame]}
      })
    })
    .catch((err) => {
      console.log(err)
    })
  };

  return { 
    state, 
    setState,
    newGameNyte,
    setNewGameNyte, 
    handleToggle, 
    toggleOff, 
    handleFriendToggle, 
    handleCompSwitch, 
    handleClickOpen, 
    handleClose, 
    deleteGameFromCollection,
    addGameToCollection,
    }
};

export default useApplicationData;