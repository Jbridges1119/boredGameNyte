import { Grid, Paper, Stack } from "@mui/material";
import theme from "../../../assets/theme";
import GameChooserDialog from "./GameChooserDialog";
import useGameCollectionData from "../../../hooks/useGameCollectionData";

const GameChooser = (props) => {

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
              {/* checked[0] */}
              THIS WILL DISPLAY GAME 1
            </div>
          </Grid>
          <Grid item>
            <div>
              {/* checked[1] */}
              THIS WILL DISPLAY GAME 2
            </div>
          </Grid>
          <Grid item>
          <div>
              {/* checked[2] */}
              THIS WILL DISPLAY GAME 3
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