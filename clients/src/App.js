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
import { authContext } from './pages/Login/Auth';


function App() {
  const { userId, state, setState, logout, login, gameNytesHosted  } = useContext(authContext);
  const {
    setTitle,
    setLocation,
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
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      {!userId && <Login theme={theme} />}
       {userId && <Layout logout={logout} theme={theme}>
          <Routes>
            <Route
              exact path="/"
              element={
              <Home
                state={state}
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
