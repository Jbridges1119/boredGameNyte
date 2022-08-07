import { Grid, Paper, Stack } from "@mui/material";
import theme from "../../../assets/theme";
import GameChooserDialog from "./GameChooserDialog";
import useGameChooserData from "../../../hooks/useGameChooserData";

const GameChooser = (props) => {
  const {
    state,
  } = useGameChooserData();
  return(
    <Paper 
      elevation={12}
      sx={{
      height: 650,
      width: 650,
      backgroundColor: theme.palette.secondary.main,
      borderRadius: "20px"
    }}>
      <Grid container>
        <Stack direction="column" sx={{py: 8, px: 12}}>
          <Grid item>
            <div>
              {state.collection[state.checked[0]] && state.collection[state.checked[0]].name}
              {!state.collection[state.checked[0]] && "THIS WILL DISPLAY GAME 1"}
            </div>
          </Grid>
          <Grid item>
            <div>
              {state.collection[state.checked[1]] && state.collection[state.checked[1]].name}
              {!state.collection[state.checked[1]] && "THIS WILL DISPLAY GAME 2"}
            </div>
          </Grid>
          <Grid item>
          <div>
              {state.collection[state.checked[2]] && state.collection[state.checked[2]].name}
              {!state.collection[state.checked[2]] && "THIS WILL DISPLAY GAME 3"}
            </div>
          </Grid>
          <Grid item>
            <GameChooserDialog 
              sx={{
                color: 'white',
                height: "100%",
                width: "100%"
              }}
              theme={theme}/>  
          </Grid>
        </Stack>
      </Grid>
    </Paper>
  );
};

export default GameChooser;