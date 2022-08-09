import { useState } from "react";

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

const useCreateGameNyteData = () => {

  
  // This will ideally be the users collection retrieved from database
  // Currently, default state is dummy data stored above
  // Will have to use setCollection with a useEffect later

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