import { CardMedia,  } from '@mui/material';
import { Box } from '@mui/system';
import theme from '../../../../assets/theme'

const GamePicture = (props) => {

  
  return ( 
 
<Box
sx={{
  width: "100%",
  borderRadius: "20px",
  
  backgroundColor: theme.palette.primary.main,
  height: '475px',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center'
}}
> 

<CardMedia
    component="img"
   
    image={props.picture.data[0] ? props.picture.data[0].images.large : ""}
    alt=""
    sx={{
      objectFit: 'contain',
      maxWidth: '400px',
      maxHeight: '600px'
     
    }}
    />

</Box>
   );
}
 
export default GamePicture;


