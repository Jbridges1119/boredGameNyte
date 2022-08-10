import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from '@mui/material/Paper';
import theme from "../../../assets/theme"

const NyteGameListButtonCard = () => {
  const card = (
    <React.Fragment>
      <CardContent
        sx={{
          height: 250,
          backgroundColor: theme.palette.secondary.main,
          borderRadius: '15px' 
        }}
      >
        <Grid  direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={11}>
        <Stack spacing={2}>
          <Button  sx={{backgroundColor: theme.palette.primary.main, height: 75,  fontSize: 45,textTransform: 'none', borderRadius: '20px' }} variant="contained">How To Play Gloomhaven</Button>
          <Button  sx={{backgroundColor: theme.palette.primary.main, height: 75,  fontSize: 45,textTransform: 'none', borderRadius: '20px' }} variant="contained">How To Play Lords of Waterdeep</Button>
          <Button  sx={{backgroundColor: theme.palette.primary.main, height: 75,  fontSize: 45,textTransform: 'none', borderRadius: '20px' }} variant="contained">How To Play Smash up</Button>
        </Stack>
        </Grid>
      </Grid>
      </CardContent>
    </React.Fragment>
  );

  return (
        <Paper sx={{
          borderRadius: '20px',
          width: '100%' 
        }} elevation={4}>{card}</Paper>
  );
};

