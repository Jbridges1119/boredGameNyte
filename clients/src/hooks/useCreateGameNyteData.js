import { useState, useEffect } from "react";
import axios from "axios";

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

<<<<<<< HEAD:clients/src/hooks/useGameChooserData.js



const useGameChooserData = () => {
=======
const useCreateGameNyteData = () => {
>>>>>>> 228443f93c81c594d5c1ae00c3516ebc289f9796:clients/src/hooks/useCreateGameNyteData.js

  
  // This will ideally be the users collection retrieved from database
  // Currently, default state is dummy data stored above
  // Will have to use setCollection with a useEffect later

  const [userId, setUserId] = useState(1);
  const [state, setState] = useState({
    user: {},
    friendsList: [],
    collection: games,
    gamesChosen: [],
    friendsInvited: [],
    competitive: false,
    name: '',
    place: '',
    date: new Date(),
    open: false
  })

  // useEffect(
  //   Promise.all([
  //     axios.get(`http://localhost:3005/api/users/${userId}`),
  //     axios.get(`http://localhost:3005/api/users/${userId}/friends`),
  //     axios.get(`http://localhost:3005/api/users/${userId}/collection`)
  //   ])
  //   .then((all) => {
  //     console.log(all)
  //     setState((prev) => {
  //       return {...prev, user: all[0].data, friendsList: all[1].data, collection: all[2].data}
  //     })
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  //   , [userId]);

  // Function to set/unset checked friends in state
  const handleFriendToggle = (value) => () => {
    const currentIndex = state.friendsInvited.indexOf(value);
    const newChecked = [...state.friendsInvited];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setState(prev => ({...prev, friendsInvited: newChecked}));
  };

  // These 4 functions handle the collection dialog, "open" in state
  const handleClickOpen = () => {
    setState(prev => ({ ...prev, open: true }));
  };
  // Click the 'x' to close the dialog without saving state
  const handleClose = () => {
    setState(prev => ({...prev, open: false}));
  };

  const handleToggle = (value) => () => {
    const currentIndex = state.gamesChosen.indexOf(value);
    const newChecked = [...state.gamesChosen];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    
    setState({...state, gamesChosen: newChecked})
  };

  // From the Create page, this function should remove display cards from the game chooser component
  const toggleOff = (value) => () => {
    const currentIndex = state.gamesChosen.indexOf(value);
    const newChecked = [...state.gamesChosen];



    if (currentIndex >= 0) {
      newChecked.splice(currentIndex, 1);
    }
    
    setState(prev => ({...prev, gamesChosen: newChecked}));
  };

  // This handles the state of "competitive" with the switch on the create page
  const handleCompSwitch = () => {
    return setState((prev) => {
      return { ...prev, competitive: (state.competitive === false ? true : false) }
    })
  }

  const printState = () => {
    console.log(state.date._d)
    console.log(state)
  }

  return { 
    state, 
    setState, 
    handleToggle, 
    toggleOff, 
    handleFriendToggle, 
    handleCompSwitch, 
    handleClickOpen, 
    handleClose, 
    printState }
};

export default useCreateGameNyteData;