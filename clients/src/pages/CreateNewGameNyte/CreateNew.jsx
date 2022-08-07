import { Box } from "@mui/system";
import React from "react";
import { Grid, Stack } from "@mui/material";
import theme from "../../assets/theme";
import TitleBar from "./CreateGameNyteComponents/GameNyteTitleBar";
import FriendInviter from "./CreateGameNyteComponents/GameNyteFriendInviter";
import GameChooser from "./CreateGameNyteComponents/GameChooser";
import StaticDatePicker from "./CreateGameNyteComponents/DatePicker";


const CreateNew = () => {



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
            <Grid container alignContent="center">
              <Stack>
                <Grid item xs={12} sx={{
                  py: 6,
                  px: 3
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
          <Grid item alignContent="center" xs={12} sx={{px:3, py:12}}>
              <GameChooser />
          </Grid>
        </Stack>
      </Grid>
    </Box>
  );
};

export default CreateNew;