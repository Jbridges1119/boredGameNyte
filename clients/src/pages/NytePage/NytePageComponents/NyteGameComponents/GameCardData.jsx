
import { Button,  CardMedia, Grid, Stack, Typography, Box } from "@mui/material";
import theme from '../../../../assets/theme'
import { Link } from "react-router-dom";


const GameCardData = (props) => {
  return ( 
    <Grid  container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
    <Grid item xs={4} >
    
          <Box
sx={{
  width: "100%",
  borderRadius: "20px",
  backgroundColor: theme.palette.primary.dark,
  height: '225px',
  display: 'flex',
  justifyContent:'center',
  alignContent:'center',
  alignItems: 'center'
  
}}
> 

<CardMedia
    component="img"
   
    image={props.img}
    alt=""
    sx={{
      objectFit: 'contain',
      maxWidth: '250px',
      maxHeight: '200px'
     
    }}
    />

</Box>
    </Grid>
    <Grid item xs={1}>
    </Grid>
    <Grid item xs={7}>
    <Stack
 
   
   sx={{
    height: '210px',
    display: 'flex',
    justifyContent:'space-around',
    alignItems:'space-between',}}
   >

    <Typography sx={{color: "#FFFFFF"}} align="center"  variant="h4">{props.name}</Typography>

    <Button component={Link} to={'/game/' + props.id} sx={{backgroundColor: theme.palette.error.main, height: 60,  fontSize: 35,textTransform: 'none', borderRadius: '20px' }} variant="contained">How To Play</Button>
  
    </Stack>
    </Grid>
    </Grid>
   );
}

export default GameCardData;

