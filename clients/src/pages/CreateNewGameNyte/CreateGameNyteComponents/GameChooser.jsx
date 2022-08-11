import { Grid, Paper, Stack } from "@mui/material";
import theme from "../../../assets/theme";
import GameChooserDialog from "./GameChooserDialog";
import GameChooserDisplayCard from "../CreateGameNyteComponents/GameChooserDisplayCard";
import { getGameById } from "../../../helperFunctions/helperFunctions";
import { useState, useEffect } from "react";
// mt:35.7
const GameChooser = (props) => {
  const [addButton, setAddButton] = useState(35.7);

  // Need to find a way to access the matching ID inside the props.
  // findGameById function?
  let game1 = getGameById(props.state.collection, props.state.gamesChosen[0]);
  let game2 = getGameById(props.state.collection, props.state.gamesChosen[1]);
  let game3 = getGameById(props.state.collection, props.state.gamesChosen[2]);

  useEffect(() => {
    if (props.state.gamesChosen.length > 0) setAddButton(8);
    if (props.state.gamesChosen.length === 0) setAddButton(35.7);
  }, [game1]);

  return (
    <Paper
      elevation={8}
      sx={{
        height: "720px",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "20px",
        width: "100%",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={9}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Stack spacing={9} sx={{ width: "100%" }} mt={addButton}>
            {game1 && (
              <GameChooserDisplayCard
                id={game1.id}
                name={game1.name}
                thumbnail={game1.thumb_url}
                minPlayers={game1.min_players}
                maxPlayers={game1.max_players}
                toggleOff={props.toggleOff}
              />
            )}
            {!game1 && null}

            {game2 && (
              <GameChooserDisplayCard
                id={game2.id}
                name={game2.name}
                thumbnail={game2.thumb_url}
                minPlayers={game2.min_players}
                maxPlayers={game2.max_players}
                toggleOff={props.toggleOff}
              />
            )}
            {!game2 && null}

            {game3 && (
              <GameChooserDisplayCard
                id={game3.id}
                name={game3.name}
                thumbnail={game3.thumb_url}
                minPlayers={game3.min_players}
                maxPlayers={game3.max_players}
                toggleOff={props.toggleOff}
              />
            )}
            {!game3 && null}

            {props.state.gamesChosen.length === 3 && null}
            {props.state.gamesChosen.length < 3 && (
              <GameChooserDialog
                state={props.state}
                handleClickOpen={props.handleClickOpen}
                handleToggle={props.handleToggle}
                handleClose={props.handleClose}
                handeCloseSave={props.handeCloseSave}
                sx={{
                  color: "white",
                  height: "100%",
                  width: "100%",
                }}
                theme={theme}
              />
            )}
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GameChooser;

// <Paper
//       elevation={8}
//       sx={{
//      height:'720px',
//       backgroundColor: theme.palette.secondary.main,
//       borderRadius: "20px",
//       width:'100%'
//     }}>
//       <Grid container justifyContent='center'>
//         <Stack direction="column">
//           <Grid
//           item
//           xs={4}
//           sx={chooserCardGridStyle}>
//               {game1 &&
//               <GameChooserDisplayCard
//                 id={game1.id}
//                 name={game1.name}
//                 thumbnail={game1.thumb_url}
//                 minPlayers={game1.min_players}
//                 maxPlayers={game1.max_players}
//                 toggleOff={props.toggleOff}
//               />}
//               {!game1 && null}
//           </Grid>
//           <Grid
//           item
//           xs={4}
//           sx={chooserCardGridStyle}>
//               {game2 &&
//               <GameChooserDisplayCard
//                 id={game2.id}
//                 name={game2.name}
//                 thumbnail={game2.thumb_url}
//                 minPlayers={game2.min_players}
//                 maxPlayers={game2.max_players}
//                 toggleOff={props.toggleOff}
//               />}
//               {!game2 && null}
//           </Grid>
//           <Grid
//           item
//           xs={4}
//           sx={chooserCardGridStyle}>
//               {game3 &&
//               <GameChooserDisplayCard
//                 id={game3.id}
//                 name={game3.name}
//                 thumbnail={game3.thumb_url}
//                 minPlayers={game3.min_players}
//                 maxPlayers={game3.max_players}
//                 toggleOff={props.toggleOff}
//               />}
//               {!game3 && null}
//           </Grid>
//           <Grid item sx={{
//             py: 2,
//             pl: 35
//           }}>
//             {props.state.gamesChosen.length === 3 && null}
//             {props.state.gamesChosen.length < 3 &&
//             <GameChooserDialog
//               state={props.state}
//               handleClickOpen={props.handleClickOpen}
//               handleToggle={props.handleToggle}
//               handleClose={props.handleClose}
//               handeCloseSave={props.handeCloseSave}
//               sx={{
//                 color: 'white',
//                 height: "100%",
//                 width: "100%"
//               }}
//               theme={theme}/>
//             }
//           </Grid>
//         </Stack>
//       </Grid>
//     </Paper>
