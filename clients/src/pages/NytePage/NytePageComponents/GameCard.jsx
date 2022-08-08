import {
  CardContent,
  Grid,
  Paper,
} from "@mui/material";
import theme from "../../../assets/theme";

import GameCardData from './NyteGameComponents/GameCardData'

const GameCard = (props) => {


 

  const card = (
    <>
      <CardContent
 
        sx={{
          height: 225,
          backgroundColor: theme.palette.secondary.main,
          borderRadius: "15px",
          display: 'flex',
          justifyContent:'center',
          
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={11}>
            <GameCardData 
            id={props.id}
          img={props.img}
          name={props.name}/>
          </Grid>

        </Grid>
      </CardContent>
    </>
  );
  return (
    <Paper
      sx={{
        borderRadius: "20px",
        width: "100%",
      }}
      elevation={4}
    >
      {card}
    </Paper>
  );
};

export default GameCard;
