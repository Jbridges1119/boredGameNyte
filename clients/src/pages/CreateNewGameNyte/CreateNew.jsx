import { Box } from "@mui/system";
import React from "react";
import { Grid, Stack, FormControlLabel, FormGroup, Switch, Typography } from "@mui/material";
import theme from "../../assets/theme";
import TitleBar from "./CreateGameNyteComponents/GameNyteTitleBar";
import FriendInviter from "./CreateGameNyteComponents/GameNyteFriendInviter";
import GameChooser from "./CreateGameNyteComponents/GameChooser";
import { Button } from "@mui/material";
import useGameChooserData from "../../hooks/useGameChooserData";
import StaticDatePicker from "./CreateGameNyteComponents/DatePicker";


const CreateNew = () => {

  const{ 
    state,
    setState,
    handleClickOpen,
    handleClose,
    handleCloseSave,
    handleToggle,
    handleCompSwitch,
    toggleOff
    } = useGameChooserData();

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        backgroundColor: theme.palette.primary.main
      }}>

      <Grid container justifyContent="space-evenly">
        <Stack direction="row">

          <Grid item>
            <Grid container>
              <Stack alignContent="center">
                <Grid item xs={12} sx={{
                  py: 6,
                  pl: 1
                }}>
                  <TitleBar />
                </Grid>
                <Grid item xs={12} sx={{
                  py: 3,
                  pl: 12
                }}>
                  <StaticDatePicker
                    sx={{
                      color: theme.palette.secondary.light,
                    }}
                  />
                </Grid>


                <Grid item xs={12} sx={{ px: 15 }}>
                  <FormGroup>
                    <Stack direction="row" alignContent="center">
                      <Grid item>
                        <Typography
                          sx={{ pt: 1, color: "white" }}>
                          Casual
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Switch
                          checked={state.competitive}
                          onChange={handleCompSwitch}
                          inputProps={{ 'aria-label': 'controlled' }}
                          color="error" />
                      </Grid>
                      <Grid item>
                        <Typography
                          sx={{ pt: 1, color: "white" }}>
                          Competitive
                        </Typography>
                      </Grid>
                    </Stack>
                  </FormGroup>
                </Grid>


                <Grid item xs={12} sx={{ px: 3, py: 3 }}>
                  <FriendInviter />
                </Grid>
              </Stack>
            </Grid>
          </Grid>


          <Stack>
            <Grid item xs={12} sx={{ px: 6, pt: 6 }}>
              <GameChooser 
              state={state}
              setState={setState}
              handleClickOpen={handleClickOpen}
              handleClose={handleClose}
              handleCloseSave={handleCloseSave}
              handleToggle={handleToggle}
              toggleOff={toggleOff}
              />
            </Grid>
            <Grid item xs={12} sx={{ px: 32, py: 12 }}>
              <Button
                sx={{
                  color: 'white',
                  backgroundColor: theme.palette.error.main,
                  width: 400,
                  height: 80
                }}
              >Create Game Nyte</Button>
            </Grid>
          </Stack>
        </Stack>
      </Grid>
    </Box>
  );
};

export default CreateNew;