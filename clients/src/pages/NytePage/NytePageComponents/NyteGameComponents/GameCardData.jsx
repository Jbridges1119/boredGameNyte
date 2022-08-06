import { Button, Card, CardMedia, Grid, Stack, Typography, Box } from "@mui/material";
import theme from '../../../../assets/theme'


const GameCardData = (props) => {
  return ( 
    <Grid  container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
    <Grid item xs={4}>
      <Box
    sx={{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: theme.palette.secondary.main,
        
      }}>
      <CardMedia
          component="img"
         
          image={props.img}
          alt="Box Art"
          sx={{
            objectFit: 'contain',
            maxWidth: '280px',
            maxHeight: '230px'
           
          }}
          />
          </Box>
          
    </Grid>
    <Grid item xs={8}>
    <Stack
   direction="column"
   justifyContent="space-between"
   
   alignItems="space-between"
   pr={4}
   sx={{
    height: '210px',
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'space-between',}}
   >

    <Typography sx={{color: "#FFFFFF"}} pt={1} variant="h3">{props.name}</Typography>
    <Button  sx={{backgroundColor: theme.palette.error.main, height: 75,  fontSize: 40,textTransform: 'none', borderRadius: '20px' }} variant="contained">How To Play</Button>
    </Stack>
    </Grid>
    </Grid>
   );
}

export default GameCardData;

