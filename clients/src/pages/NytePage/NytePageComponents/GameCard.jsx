import { CardContent, Grid, Paper } from "@mui/material";
import theme from "../../../assets/theme";
import {motion} from 'framer-motion'
import GameCardData from "./NyteGameComponents/GameCardData";

const GameCard = (props) => {
  
  const card = (
    <>
      <CardContent
        sx={{
          height: 225,
          backgroundColor: theme.palette.primary.main,
          borderRadius: "15px",
          display: "flex",
          justifyContent: "center",
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
              id={props.game && props.game.id ? props.game.id : "No img"}
              img={
                props.game && props.game.thumb_url
                  ? props.game.thumb_url
                  : ""
              }
              name={props.game && props.game.name ? props.game.name : ""}
            />
          </Grid>
        </Grid>
      </CardContent>
    </>
  );
  
  return (
    <motion.div  className="outer" initial={{x: -300, opacity: 0 }} animate={{x: 0, opacity: 1}} exit={{x: 300, opacity: 0}}>
    <Paper
      sx={{
        borderRadius: "20px",
        width: "100%",
      }}
      elevation={4}
    >
      {card}
    </Paper>
    </motion.div>
  );
};

export default GameCard;
