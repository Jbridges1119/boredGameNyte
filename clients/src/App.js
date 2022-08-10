// import React from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import theme from "./assets/theme";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Dashboard/Home";
import Layout from "./pages/Layout/Layout";
import Search from "./pages/Search/Search";
import NytePage from './pages/NytePage/NytePage'
import GameNyteList from './pages/GameNyteList/GameNytesList'
import GamePage from './pages/GamePage/GamePage'
import CreateNew from "./pages/CreateNewGameNyte/CreateNew";
import GameCollection from "./pages/GameCollection/GameCollection";

import useCreateGameNyteData from "./hooks/useCreateGameNyteData";

function App() {
  
  const{
    setTitle,
    setLocation,
    state,
    setState,
    handleClickOpen,
    handleClose,
    handleToggle,
    handleFriendToggle,
    handleCompSwitch,
    toggleOff,
    printState
    } = useCreateGameNyteData();

  const [userId, setUserId] = useState(1);
  const [gameNytes, setGameNytes] = useState({
    nytes: [],
    games: [],
  });

  useEffect(()=> {
    axios.get(`http://localhost:3005/api/gamenytes/host/${userId}`)
    .then((data) => {
        setGameNytes((prev) => {
          return { ...prev, nytes: data.data }
        }) 
      })
    }, []);


  // user data useEffect
  useEffect(() => {
    Promise.all([
      axios.get(`http://localhost:3005/api/users/${userId}`),
      axios.get(`http://localhost:3005/api/users/${userId}/friends`),
      axios.get(`http://localhost:3005/api/users/${userId}/collection`)
    ])
    .then((all) => {
      setState((prev) => {
        return {...prev, user: all[0].data, friendsList: all[1].data, collection: all[2].data}
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }
  , [userId]);

  return (
    <ThemeProvider theme={theme}>
      
                <BrowserRouter>
                  <Layout theme={theme}>
                    <Routes>
                      <Route 
                        exact path="/" 
                        element={<Home 
                          state={state}
                          gameNytes={gameNytes.nytes}
                        />} theme={theme}/>
                      <Route path="/search" element={<Search />} theme={theme}/>
                      <Route path="/nyte" element={<NytePage />} theme={theme}/>
                      <Route path="/gamenytes" element={<GameNyteList />} theme={theme}/>
                      <Route 
                        path="/create" 
                        element={<CreateNew 
                                  setTitle={setTitle}
                                  setLocation={setLocation}
                                  state={state}
                                  setState={setState}
                                  handleClickOpen={handleClickOpen}
                                  handleClose={handleClose}
                                  handleToggle={handleToggle}
                                  handleFriendToggle={handleFriendToggle}
                                  handleCompSwitch={handleCompSwitch}
                                  toggleOff={toggleOff}
                                  printState={printState} 
                                  />}
                        theme={theme}/>
                      <Route path="/collection" element={<GameCollection state={state}/>} theme={theme}/>
                      <Route path="/game/:id" element={<GamePage />} theme={theme}/>
                    </Routes>
                  </Layout>
                </BrowserRouter>
      
    </ThemeProvider>
  );
}

export default App;
