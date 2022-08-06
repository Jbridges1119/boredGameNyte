import { Box } from "@mui/system";
import React from "react";
import { Grid, Stack } from "@mui/material";
import theme from "../../assets/theme";
import TitleBar from "./CreateGameNyteComponents/GameNyteTitleBar";
import FriendInviter from "./CreateGameNyteComponents/GameNyteFriendInviter";
import 'react-widgets/styles.css'
import { Calendar } from "react-widgets";


const CreateNew = () => {



  return (
    <Box
      sx={{
        color: "white",
        height: "100%",
        width: "100%",
        backgroundColor: theme.palette.primary.main
      }}>
      <Grid container alignContent="center" justifyContent="center">
        <Stack direction="row">
          <Grid item>
            <Grid container>
              <Stack>
                <Grid item xs={6} sx={{
                  py: 4
                }}>
                  <TitleBar />
                </Grid>
                <Grid item xs={3} sx={{
                  py: 4,
                  px: 4
                }}>
                  <Calendar />
                </Grid>
                <Grid item xs={3}>
                  <FriendInviter />
                </Grid>
              </Stack>
            </Grid>
          </Grid>
          <Grid item xs={12}>
              This will be the game chooser div. The dropdown will have games from the users collection, and checkboxes?
          </Grid>
        </Stack>
      </Grid>
    </Box>
  );
};

export default CreateNew;