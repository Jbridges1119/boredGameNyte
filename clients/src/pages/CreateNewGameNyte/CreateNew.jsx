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

const CreateNew = (props) => {
  const [casualPicture, setCasualPicture] = useState();

  useEffect(() => {
    if (props.state.competitive) setCasualPicture(BGN);
    if (!props.state.competitive) setCasualPicture(BGNCasual);
  }, [props.state.competitive]);

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
                    title={props.state.name}
                    setTitle={props.setTitle}
                    setState={props.setState}
                  />

                  <LocationBar
                    location={props.state.place}
                    setLocation={props.setLocation}
                    setState={props.setState}
                  />

                  <StaticDatePicker
                    state={props.state}
                    setState={props.setState}
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
                          checked={props.state.competitive}
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
                    onClick={props.printState}
                    sx={{
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
