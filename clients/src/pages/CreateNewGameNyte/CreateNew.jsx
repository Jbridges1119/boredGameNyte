import { Box } from "@mui/system";
import React from "react";
import { Grid, Stack } from "@mui/material";
import theme from "../../assets/theme";
import TitleBar from "./CreateGameNyteComponents/GameNyteTitleBar";
import FriendInviter from "./CreateGameNyteComponents/GameNyteFriendInviter";
import GameChooser from "./CreateGameNyteComponents/GameChooser";
import StaticDatePicker from "./CreateGameNyteComponents/DatePicker";
import { Button } from "react-rainbow-components";


const CreateNew = () => {



  return (
    <Box
      sx={{
        height: "100vh",
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
                  py: 3
                }}>
                  <StaticDatePicker />
                </Grid>
                <Grid item xs={12} sx={{ px: 3, py: 3 }}>
                  <FriendInviter />
                </Grid>
              </Stack>
            </Grid>
          </Grid>
        <Stack>
          <Grid item xs={12} sx={{px:3, py:12}}>
              <GameChooser />
          </Grid>
          <Grid item xs={12} sx={{ px:44 }}>
              <Button>Create Game Nyte</Button>
          </Grid>
        </Stack>
        </Stack>
      </Grid>
    </Box>
  );
};

export default CreateNew;