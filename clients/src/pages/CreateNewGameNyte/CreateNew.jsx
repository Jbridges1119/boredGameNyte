import { Box } from "@mui/system";
import React from "react";
import { Grid, Stack, FormGroup, Switch, Typography } from "@mui/material";
import theme from "../../assets/theme";
import TitleBar from "./CreateGameNyteComponents/GameNyteTitleBar";
import LocationBar from "./CreateGameNyteComponents/GameNyteLocationBar";
import FriendInviter from "./CreateGameNyteComponents/GameNyteFriendInviter";
import GameChooser from "./CreateGameNyteComponents/GameChooser";
import { Button } from "@mui/material";
import StaticDatePicker from "./CreateGameNyteComponents/DatePicker";
import CompPicture from "./CreateGameNyteComponents/CompPicture";
import { useEffect, useState } from "react";
import BGN from "../../assets/Pictures/BGN.png";
import BGNCasual from "../../assets/Pictures/BGNCasual.png";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import {motion} from 'framer-motion'
const CreateNew = (props) => {
  const navigate = useNavigate();
  const [casualPicture, setCasualPicture] = useState();

  const emailInfo = {
    hostEmail: props.state.user.email,
    hostName: props.state.user.name,

  };

  const createGameNyte = () => {
    let inviteesInfo = []; // array to store invited friends user info as objects
    const invitees = props.newGameNyte.friendsInvited; // array of invited user_id's
    const friendsList = props.state.friendsList; // all user's friends in an array of objects(user info) 
    for (let friend of friendsList) {
      for (let invitee of invitees) {
        if (invitee === friend.friend_id) {
          inviteesInfo.push(friend);
        }
      }
    };

    let inviteesEmails = [];
    for (let inviteeInfo of inviteesInfo) {
      inviteesEmails.push(inviteeInfo.email);
    };

    const mailgunInfo = {
      inviteesEmails,
      location: props.newGameNyte.place,
      date: props.newGameNyte.date,
      title: props.newGameNyte.name,
      hostName: props.state.user.first_name,
    };

    if (props.newGameNyte.name === '') {return alert('Please name your game nyte!')}
    if (props.newGameNyte.place === '') {return alert('Please give your game nyte a location!')}
    if (props.newGameNyte.friendsInvited.length === 0) {return alert('Please invite some friends!')}
    if (props.newGameNyte.gamesChosen.length < 1) {return alert('Please choose at least one game for your game nyte!')}

    axios.post(`http://localhost:3005/api/gamenytes/createnew`, props.newGameNyte)
    .then((data) => {
        axios.post(`http://localhost:3005/api/gamenytes/createnew/email`, mailgunInfo)
        let nyteId = data.data;
        navigate(`/nyte/${nyteId}`);
        props.setNewGameNyte((prev) => {
          return { ...prev, host: Cookies.get('userId'), gamesChosen: [], friendsInvited: [], name: '', place: '', date: new Date(), open: false, competitive: false }
        })
      })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    if (props.newGameNyte.competitive) setCasualPicture(BGN);
    if (!props.newGameNyte.competitive) setCasualPicture(BGNCasual);
  }, [props.newGameNyte.competitive]);

  return (
    <motion.div  className="outer" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity: 0}}>
    <Box
      sx={{
        height: "100%",
        width: "100%",
        backgroundColor: theme.palette.primary.dark,
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={11}>
          <Stack mt={5}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={3.5}>
                <Stack>
                  <TitleBar
                    title={props.newGameNyte.name}
                    setTitle={props.setTitle}
                    setNewGameNyte={props.setNewGameNyte}
                  />

                  <LocationBar
                    location={props.newGameNyte.place}
                    setLocation={props.setLocation}
                    setNewGameNyte={props.setNewGameNyte}
                  />

                  <StaticDatePicker
                    newGameNyte={props.newGameNyte}
                    setNewGameNyte={props.setNewGameNyte}
                    sx={{
                      color: theme.palette.secondary.light,
                    }}
                  />

                  <CompPicture image={casualPicture} />
                  <FormGroup>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid
                        item
                        xs={5}
                        justifyContent="center"
                        alignItems="center"
                        sx={{ display: "flex", mb: 3 }}
                      >
                        {/* <Typography
                          sx={{ pt: 0.5, color: "white",display:'flex' }}>
                          Casual
                        </Typography> */}

                        <Switch
                          checked={props.newGameNyte.competitive}
                          onChange={props.handleCompSwitch}
                          inputProps={{ "aria-label": "controlled" }}
                          color="error"
                        />

                        {/* <Typography
                          sx={{ pt: 0.5, color: "white",display:'flex' }}>
                          Competitive
                        </Typography> */}
                      </Grid>{" "}
                    </Grid>
                  </FormGroup>
                  <motion.div  className="outer" initial={{x: -300, opacity: 0 }} animate={{x: 0, opacity: 1}} exit={{x: 300, opacity: 0}}>
                  <FriendInviter
                    state={props.state}
                    setState={props.setState}
                    newGameNyte={props.newGameNyte}
                    setNewGameNyte={props.setNewGameNyte}
                    handleFriendToggle={props.handleFriendToggle}
                  /></motion.div>
                </Stack>
              </Grid>
              <Grid item xs={1.25}></Grid>
              {/* Game list */}

              <Grid item xs={5.25}>
              <motion.div  className="outer" initial={{x: -300, opacity: 0 }} animate={{x: 0, opacity: 1}} exit={{x: 300, opacity: 0}}>
                <Stack sx={{ alignItems: "center" }}>
                  <GameChooser
                    state={props.state}
                    setState={props.setState}
                    newGameNyte={props.newGameNyte}
                    setNewGameNyte={props.setNewGameNyte}
                    handleClickOpen={props.handleClickOpen}
                    handleClose={props.handleClose}
                    handleCloseSave={props.handleCloseSave}
                    handleToggle={props.handleToggle}
                    toggleOff={props.toggleOff}
                  />
                  {/* <Button component={Link} to={'/game/' + props.id} sx={{width: 400,backgroundColor: theme.palette.error.main, height: 60,  fontSize: 35,textTransform: 'none', borderRadius: '20px' }} variant="contained">How To Play</Button> */}
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={createGameNyte}
                    sx={{
                      ':hover': {
                        bgcolor: theme.palette.error.light,
                        boxShadow:24
                      },':active': {
                        bgcolor: theme.palette.error.light,
                        boxShadow:8
                        
                      },
                      width: 500,
                      backgroundColor: theme.palette.error.main,
                      height: 75,
                      fontSize: 35,
                      textTransform: "none",
                      borderRadius: "20px",
                      pt: 1.25,
                      mt: 5,
                      mb: 2,
                    }}
                  >
                    Create Game Nyte
                  </Button>
                </Stack>
                </motion.div>
              </Grid>
            </Grid>{" "}
          </Stack>
        </Grid>
      </Grid>
    </Box>
    </motion.div>
  );
};

export default CreateNew;
