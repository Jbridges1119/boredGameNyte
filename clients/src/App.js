// import React from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
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
import Login from "./pages/Login/Login";
import useApplicationData from "./hooks/useApplicationData";
import { useContext } from 'react';
// import { authContext } from 'providers/AuthProvider';


function App() {
  // const { auth } = useContext(authContext);
  const {
    setTitle,
    setLocation,
    state,
    setState,
    newGameNyte,
    setNewGameNyte,
    handleClickOpen,
    handleClose,
    handleToggle,
    handleFriendToggle,
    handleCompSwitch,
    toggleOff,
    deleteGameFromCollection,
    addGameToCollection
  } = useApplicationData();

  const [userId, setUserId] = useState(1);
  // const [gameNytes, setGameNytes] = useState([]);
  const [gameNytesHosted, setGameNytesHosted] = useState([]);
  // const [gameNytesAttended, setGameNytesAttended] = useState([]);

  // useEffect(() => {
  //   axios.get(`http://localhost:3005/api/gamenytes/host/${userId}`)
  //     .then((data) => {
  //       setGameNytes(data.data)
  //     })
  // }, [userId])

  useEffect(() => {
    axios.get(`http://localhost:3005/api/gamenytes/host/${userId}/all`)
      .then((data) => {
        setGameNytesHosted(data.data)
      })
  }, [userId])

  // useEffect(() => {
  //   axios.get(`http://localhost:3005/api/gamenytes/attended/${userId}`)
  //     .then((data) => {
  //       setGameNytesAttended(data.data)
  //     })
  // }, [userId])

  useEffect(() => {
    axios.get(`http://localhost:3005/api/gamecollection`)
      .then((data) => {
        setState((prev) => {
          return { ...prev, globalCollection: data.data }
        })
      })
  }, [])

  // user data useEffect
  useEffect(() => {
    Promise.all([
      axios.get(`http://localhost:3005/api/users/${userId}`),
      axios.get(`http://localhost:3005/api/users/${userId}/friends`),
      axios.get(`http://localhost:3005/api/users/${userId}/collection`)
    ])
      .then((all) => {
        setState((prev) => {
          return { ...prev, user: all[0].data, friendsList: all[1].data, collection: all[2].data }
        })
        setNewGameNyte((prev) => {
          return {...prev, host: userId}
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
      {!userId && <Login theme={theme} />}
       {userId && <Layout theme={theme}>
          <Routes>
            <Route
              exact path="/"
              element={
              <Home
                state={state}
                // gameNytes={gameNytes}
                // gameNytesAttended={gameNytesAttended}
                gameNytesHosted={gameNytesHosted}
                userId={userId}
              />} 
              theme={theme} />
            <Route 
              path="/search" 
              element={
              <Search
                state={state}
                addGame={addGameToCollection}
                removeGame={deleteGameFromCollection}
              />} 
              theme={theme} />
            <Route 
              path="/nyte/:id" 
              element={
              <NytePage
                state={state}
              />} 
              theme={theme} />
            <Route
              path="/gamenytes"
              element={
              <GameNyteList
                state={state}
              />}
              theme={theme} />
            <Route
              path="/create"
              element={
              <CreateNew
                setTitle={setTitle}
                setLocation={setLocation}
                state={state}
                setState={setState}
                newGameNyte={newGameNyte}
                setNewGameNyte={setNewGameNyte}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                handleToggle={handleToggle}
                handleFriendToggle={handleFriendToggle}
                handleCompSwitch={handleCompSwitch}
                toggleOff={toggleOff}
              />}
              theme={theme} />
            <Route 
              path="/collection" 
              element={
                <GameCollection 
                  state={state}
                  deleteGame={deleteGameFromCollection}
                />} 
              theme={theme} />
            <Route 
              path="/game/:id" 
              element={
              <GamePage 
                state={state}
                addGame={addGameToCollection}
                removeGame={deleteGameFromCollection}
              />} 
              theme={theme} />
          </Routes>
        </Layout>}
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
