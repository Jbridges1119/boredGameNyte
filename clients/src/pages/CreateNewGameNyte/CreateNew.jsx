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

const CreateNew = (props) => {
  const navigate = useNavigate();
  const [casualPicture, setCasualPicture] = useState();

  const createGameNyte = () => {
    if (props.newGameNyte.name === '') {return alert('Please name your game nyte!')}
    if (props.newGameNyte.place === '') {return alert('Please give your game nyte a location!')}
    if (props.newGameNyte.friendsInvited.length === 0) {return alert('Please invite some friends!')}
    if (props.newGameNyte.gamesChosen.length < 1) {return alert('Please choose at least one game for your game nyte!')}
    return axios.post(`http://localhost:3005/api/gamenytes/createnew`, props.newGameNyte)
    .then((data) => {
      let nyteId = data.data;
      navigate(`/nyte/${nyteId}`);
    })
  }

  useEffect(() => {
    if (props.newGameNyte.competitive) setCasualPicture(BGN);
    if (!props.newGameNyte.competitive) setCasualPicture(BGNCasual);
  }, [props.newGameNyte.competitive]);

  return (
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

                  <FriendInviter
                    state={props.state}
                    setState={props.setState}
                    newGameNyte={props.newGameNyte}
                    setNewGameNyte={props.setNewGameNyte}
                    handleFriendToggle={props.handleFriendToggle}
                  />
                </Stack>
              </Grid>
              <Grid item xs={1.25}></Grid>
              {/* Game list */}

              <Grid item xs={5.25}>
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
              </Grid>
            </Grid>{" "}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateNew;
