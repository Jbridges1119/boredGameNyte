import axios from 'axios';
import { useEffect } from 'react';
import { createContext, useState } from 'react';

export const authContext = createContext();

export default function AuthProvider(props) {
  const [userId, setUserId] = useState(null);
  const [state, setState] = useState({
    user: null,
    friendsList: [],
    collection: [],
    globalCollection: [],
    gameNytesHosted: []
  })
  const [gameNytesHosted, setGameNytesHosted] = useState([]);
  // Perform login process for the user & save authID, etc
  const login = function(email, password) {
    if(email && password){
    axios.get('http://localhost:3005/api/users')
      .then((data) => {
        let users = data.data.users;
        for (let u of users) {
          if (u.email === email && u.password === password) {
            Promise.all([
              axios.get(`http://localhost:3005/api/users/${u.id}/friends`),
              axios.get(`http://localhost:3005/api/users/${u.id}/collection`),
              axios.get(`http://localhost:3005/api/gamecollection`),
              axios.get(`http://localhost:3005/api/gamenytes/host/${u.id}/all`)
            ])
            .then((all) => {
              setUserId(u.id);
              setState((prev) => {
                return { 
                  ...prev, 
                  user: u, 
                  friendsList: all[0].data, 
                  collection: all[1].data,
                  globalCollection: all[2].data,
                  gameNytesHosted: all[3].data
                }
              })
            })
          }
        }
      })
    } 
  };

  const logout = function() {
    console.log("LOGGED OUT")
    setUserId(null);
    setState((prev) => {
      return { ...prev, user: null }
    })
  };

useEffect(()=> {
  if(!userId) {
  const user = window.localStorage.getItem("SuperSecretUserId")
   setUserId(JSON.parse(user))
  }
},[])

useEffect(() => {
  window.localStorage.setItem("SuperSecretUserId", JSON.stringify(userId) )
}, [userId])

useEffect(()=> {
 
  if(state.user === null) {
  const data = window.localStorage.getItem("SuperSecretData")
  setState(JSON.parse(data))
  }
},[])

useEffect(() => {
  window.localStorage.setItem("SuperSecretData", JSON.stringify(state) )
}, [state])

  // authContext will expose these items
  const userData = { userId, state, setState, login, logout, gameNytesHosted };
  console.log('userData:', userData);
  // We can use this component to wrap any content we want to share this context
  return (
    <authContext.Provider value={userData}>
        {props.children}
    </authContext.Provider>
  );
};