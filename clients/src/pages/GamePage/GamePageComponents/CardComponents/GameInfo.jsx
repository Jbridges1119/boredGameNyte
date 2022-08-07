import { Button, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import theme from '../../../../assets/theme'
import * as React from 'react';

import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


const labelsStrat = {
  0.5: 'Blind Luck Wins',
  1.0: 'Feeling Lucky',
  1.5: 'Poor',
  2.0: 'Poor+',
  2.5: 'Average',
  3.0: 'Average+',
  3.5: 'Good',
  4.0: 'Great',
  4.5: 'Extreme',
  5.0: 'Cones of Dunshire',
};

const labelsLearning = {
  0.5: 'Cones of Dunshire',
  1.0: 'Extreme',
  1.5: 'Hard+',
  2.0: 'Hard',
  2.5: 'Average',
  3.0: 'Average+',
  3.5: 'Good',
  4.0: 'Great',
  4.5: 'Excellent',
  5.0: 'Excellent+',
};

const labelsRating = {
  0.5: `Don't Play This`,
  1.0: 'Hard Pass',
  1.5: 'Pass',
  2.0: 'Maybe',
  2.5: 'Average',
  3.0: 'Average+',
  3.5: 'Good',
  4.0: 'Great',
  4.5: 'Play This',
  5.0: 'Best Game',
};



const GameInfo = ({data}) => {
 const name = data[0] ? data[0].name : ""
 const year = data[0] ? data[0].year_published : ""
 const players = data[0] ? data[0].players : ""
 const playtime = data[0] ? data[0].playtime : ""
 const description = data[0] ? data[0].description : ""
 const apirating = data[0] ? data[0].average_user_rating : ""
 const apilearningScore = data[0] ? data[0].average_learning_complexity : ""
 const apistrategyScore = data[0] ? data[0].average_strategy_complexity : ""
 const faq = data[0] ? data[0].faq : ""
 const rating = Number((Math.round(apirating * 2) / 2).toFixed(1))
 const learningScore = Number((Math.round(apilearningScore * 2) / 2).toFixed(1))
 const strategyScore = Number((Math.round(apistrategyScore * 2) / 2).toFixed(1))



const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


  return ( 
    <Box
      sx={{
        width: "100%",
  borderRadius: "20px",
  backgroundColor: theme.palette.primary.main,
  height: '475px',
  
    
      }}
    >

<Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={11}>

      <Stack container >
<Typography py={1.5}  variant="h2">{name}</Typography>
<Button sx={{ color: 'white', backgroundColor: theme.palette.primary.main, height: 45,  fontSize: 18,textTransform: 'none', borderRadius: '20px', width: '160px'  }}>Official Website</Button>

<Typography align="center" color='white' variant="h6">Release Year: {year}</Typography>
<Typography align="center" color='white' variant="h5">Players: {players} </Typography>
<Typography align="center" color='white' variant="h5">Playtime: {playtime} Min</Typography>
{/* Scores */}
<Box container
        justifyContent="center"
        alignItems="center">
  {/* Learing Curve */}
<Stack  container
        justifyContent="center"
        alignItems="center">
    <Typography sx={{ fontSize: '20px' }}  color='white' variant="h5">Learning Curve - {labelsRating[learningScore]}</Typography>
<Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
        mt:0
      }}
    >
      <Rating
      
        name="text-feedback"
        value={learningScore}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
      />
     
    </Box>
    </Stack >

    {/* Rating score */}
    <Stack container
       
       justifyContent="center"
       alignItems="center">
    <Typography sx={{ fontSize: '20px' }} color='white' variant="h5">Game Rating - {labelsRating[rating]}</Typography>
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={rating}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
      />
     
    </Box>
    </Stack>

{/* Strat score */}
    <Stack container
       justifyContent="center"
       alignItems="center">
    <Typography sx={{ fontSize: '20px',  }} color='white' variant="h5">Strategy Score - {labelsStrat[strategyScore]}</Typography>
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={strategyScore}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
      />
      
    </Box>
    </Stack>
    </Box>
{/* End of ratings */}





 


<Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="space-between"
      >
        <Grid item xs={11}   sx={{
        
        display: 'flex',
        alignItems: 'space-between',
        justifyContent:"space-between"
      }}
        >

 {/* Dialog buttons */}
 <div>
      <Button sx={{ color: 'white', backgroundColor: theme.palette.primary.main, height: 45,  fontSize: 25,textTransform: 'none', borderRadius: '20px', width: '300px'}} onClick={handleClickOpen('paper')}>Description</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle sx={{ color: 'white', backgroundColor: theme.palette.secondary.main}} id="scroll-dialog-title">Description & FAQ</DialogTitle>
        <DialogContent dividers={scroll === 'paper'} sx={{ color: 'white', backgroundColor: theme.palette.secondary.main}}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            sx={{ color: 'white', backgroundColor: theme.palette.secondary.main}}
          >
            <Typography  dangerouslySetInnerHTML={{__html:description}}/>
            <Typography dangerouslySetInnerHTML={{__html:faq}}/>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
   {/* End of Dialog buttons */}
   <Button sx={{ color: 'white', backgroundColor: theme.palette.error.main, height: 45,  fontSize: 25,textTransform: 'none', borderRadius: '20px', width: '300px' }}>Add To Collection</Button>
</Grid>
</Grid>

</Stack>





</Grid></Grid>

    </Box>
   );
}
 
export default GameInfo;