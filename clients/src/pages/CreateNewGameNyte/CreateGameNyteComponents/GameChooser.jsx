import { Grid, Paper, Stack } from "@mui/material";
import theme from "../../../assets/theme";
import GameChooserDialog from "./GameChooserDialog";
import useGameChooserData from "../../../hooks/useGameChooserData";
import GameChooserDisplayCard from '../CreateGameNyteComponents/GameChooserDisplayCard'

const GameChooser = (props) => {
  
  const {
    state,
  } = useGameChooserData();

  let game1 = state.collection[state.checked[0]]
  let game2 = state.collection[state.checked[1]]
  let game3 = state.collection[state.checked[2]]
  let chooserCardGridStyle = {
    py: 6,
    px: 12
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
      <Grid container xs={12}>
        <Stack direction="column">
          <Grid 
          item 
          xs={4}
          sx={chooserCardGridStyle}>
            <div>
              {game1 && 
              <GameChooserDisplayCard
                id={game1.id}
                name={game1.name}
                thumbnail={game1.thumbnail}
                minPlayers={game1.min_players}
                maxPlayers={game1.max_players}
              />}
              {!game1 && null}
            </div>
          </Grid>
          <Grid 
          item 
          xs={4}
          sx={chooserCardGridStyle}>
            <div>
              {game2 && 
              <GameChooserDisplayCard
                id={game2.id}
                name={game2.name}
                thumbnail={game2.thumbnail}
                minPlayers={game2.min_players}
                maxPlayers={game2.max_players}
              />}
              {!game2 && null}
            </div>
          </Grid>
          <Grid 
          item 
          xs={4}
          sx={chooserCardGridStyle}>
          <div>
              {game3 && 
              <GameChooserDisplayCard
                id={game3.id}
                name={game3.name}
                thumbnail={game3.thumbnail}
                minPlayers={game3.min_players}
                maxPlayers={game3.max_players}
              />}
              {!game3 && null}
            </div>
          </Grid>
          <Grid item sx={{
            py:2
          }}>
            {state.checked.length === 3 && null}
            {state.checked.length < 3 && 
            <GameChooserDialog 
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