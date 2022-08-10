import { Box, CardMedia } from "@mui/material";

import BGN from '../../../assets/Pictures/BGN.png'
import BGNCasual from '../../../assets/Pictures/BGNCasual.png'
import theme from '../../../assets/theme'

const CompPicture = () => {
  return ( 
    
    <Box
sx={{
  width: "100%",
  borderRadius: "20px",
  backgroundColor: theme.palette.primary.dark,
  height: '155px',
  display: 'flex',
  justifyContent:'center',
  alignContent:'center',
  alignItems: 'center',
 m:0
  
}}
> 

<CardMedia
    component="img"
    image={BGN}
    alt="BGN"
    sx={{
      objectFit: 'contain',
      maxWidth: '155px',
      maxHeight: '155px'
    }}
    />

</Box>
   );
}
 
export default CompPicture;