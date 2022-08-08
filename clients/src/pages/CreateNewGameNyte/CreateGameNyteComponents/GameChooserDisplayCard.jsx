import { Grid, IconButton, Paper, Stack } from "@mui/material";
import useGameChooserData from "../../../hooks/useGameChooserData";
import Close from "@mui/icons-material/Close";
import theme from "../../../assets/theme";


export default function GameDisplayCard(props) {


  return(
    <Paper 
      elevation={8}
      sx={{
      backgroundColor: theme.palette.primary.main,
      width: 600,
      maxHeight: 140,
      borderRadius: "20px"
    }}>
      <Grid container justifyContent="space-between" direction="row" p={2}>
        <Grid item alignContent="center">
        <img 
              style={{
                height: 100,
                width: 100,
                borderRadius: "10px"
              }} 
              src={props.thumbnail} 
              alt="no img"
              />
        </Grid>
          <Stack alignContent="center">
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
                onClick={props.toggleOff(props.id)}
                >
                <Close />
              </IconButton>
            </Grid>
      </Grid>
    </Paper>
  );
};