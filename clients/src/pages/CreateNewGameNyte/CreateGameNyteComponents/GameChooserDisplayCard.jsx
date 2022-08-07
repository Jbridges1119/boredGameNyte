import { Grid, IconButton, Paper, Stack } from "@mui/material";
import useGameChooserData from "../../../hooks/useGameChooserData";
import Close from "@mui/icons-material/Close";
import theme from "../../../assets/theme";


export default function GameDisplayCard(props) {

  const {
    state,
    toggleOff,
  } = useGameChooserData();


  return(
    <Paper 
      elevation={8}
      sx={{
      backgroundColor: theme.palette.primary.main,
      width: 500,
      maxHeight: 350,
    }}>
      <Grid container justifyContent="space-evenly" alignContent="center" direction="row">
        <Grid item alignContent="center">
        <img 
              style={{
                height: 100,
                width: 100
              }} 
              src={props.thumbnail} 
              alt="no img"
              />
        </Grid>
          <Stack>
            <Grid item>
                  <h2>
                    {props.name}
                  </h2>
            </Grid>
            <Grid item>
                  <h4>
                    Players: {props.minPlayers} to {props.maxPlayers}
                  </h4>
            </Grid>
          </Stack>
            <Grid item>
            <IconButton
              aria-label="close"
              onClick={toggleOff(props.id)}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
              }}>
              <Close />
            </IconButton>
            </Grid>
      </Grid>
    </Paper>
  );
};