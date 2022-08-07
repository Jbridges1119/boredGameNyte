import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import theme from '../../../../assets/theme'

const GameInfo = (props) => {
  console.log(props)
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
<Typography></Typography>
    </Box>
   );
}
 
export default GameInfo;