import { CardMedia, Grid, Typography } from "@mui/material";



const Game = (props) => {
  return ( 
    <Grid item xs={4}>
      <CardMedia
          component="img"
        
          image={props.img}
          alt="green iguana"
          sx={{
            maxWidth: '150px',
            maxHeight: '150px'
           
          }}
          />
          <Typography fontSize={25}>{props.name}</Typography>
    </Grid>
   );
}
 
export default Game;