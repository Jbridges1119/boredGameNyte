import { Stack, Button } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../../assets/theme"
const NyteStatus = () => {
  return ( 
   
    <Stack spacing={6}>
              <Button  sx={{backgroundColor: 'green', height: 75,  fontSize: 50, textTransform: 'none', borderRadius: '20px',   }}
              variant="contained" disableElevation>
              Upcoming</Button>
          <Button  sx={{backgroundColor: theme.palette.error.main, height: 75,  fontSize: 50, textTransform: 'none', borderRadius: '20px',  }} variant="contained">Cancel</Button>
          
          </Stack>
        
   );
}
 
export default NyteStatus;