import { Grid, Paper, Stack } from "@mui/material";
import theme from "../../../assets/theme";
import GameChooserDialog from "./GameChooserDialog";
import GameChooserDisplayCard from '../CreateGameNyteComponents/GameChooserDisplayCard'
import getGameById from '../../../helperFunctions/helperFunctions'

const GameChooser = (props) => {
  
  // Need to find a way to access the matching ID inside the props.
  // findGameById function?
  let game1 = getGameById(props.state.collection, props.state.gamesChosen[0]);
  let game2 = getGameById(props.state.collection, props.state.gamesChosen[1]);
  let game3 = getGameById(props.state.collection, props.state.gamesChosen[2]);
  let chooserCardGridStyle = {
    py: 3,
    px: 12,
    mt: 6
  }

  return(
    <Paper 
      elevation={12}
      sx={{
      height: 800,
      width: 800,
      backgroundColor: theme.palette.secondary.main,
      borderRadius: "20px"
    }}>
      <Grid container>
        <Stack direction="column">
          <Grid 
          item 
          xs={4}
          sx={chooserCardGridStyle}>
              {game1 && 
              <GameChooserDisplayCard
                id={game1.id}
                name={game1.name}
                thumbnail={game1.thumbnail}
                minPlayers={game1.min_players}
                maxPlayers={game1.max_players}
                toggleOff={props.toggleOff}
              />}
              {!game1 && null}
          </Grid>
          <Grid 
          item 
          xs={4}
          sx={chooserCardGridStyle}>
              {game2 && 
              <GameChooserDisplayCard
                id={game2.id}
                name={game2.name}
                thumbnail={game2.thumbnail}
                minPlayers={game2.min_players}
                maxPlayers={game2.max_players}
                toggleOff={props.toggleOff}
              />}
              {!game2 && null}
          </Grid>
          <Grid 
          item 
          xs={4}
          sx={chooserCardGridStyle}>
              {game3 && 
              <GameChooserDisplayCard
                id={game3.id}
                name={game3.name}
                thumbnail={game3.thumbnail}
                minPlayers={game3.min_players}
                maxPlayers={game3.max_players}
                toggleOff={props.toggleOff}
              />}
              {!game3 && null}
          </Grid>
          <Grid item sx={{
            py: 2,
            pl: 35
          }}>
            {props.state.gamesChosen.length === 3 && null}
            {props.state.gamesChosen.length < 3 && 
            <GameChooserDialog
              state={props.state}
              handleClickOpen={props.handleClickOpen}
              handleToggle={props.handleToggle}
              handleClose={props.handleClose}
              handeCloseSave={props.handeCloseSave}
              sx={{
                color: 'white',
                height: "100%",
                width: "100%"
              }}
              theme={theme}/>  
            }
          </Grid>
        </Stack>
      </Grid>
    </Paper>
  );
};

export default GameChooser;