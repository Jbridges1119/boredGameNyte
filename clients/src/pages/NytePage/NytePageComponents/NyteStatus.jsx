import { Stack, Button } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../../assets/theme"
const NyteStatus = () => {
  return ( 
   
    <Stack >
              
          <Button  sx={{backgroundColor: theme.palette.error.main, height: 75,  fontSize: 40, textTransform: 'none', borderRadius: '20px',  }} variant="contained">Cancel</Button>
          
          </Stack>
        
   );
}
 
export default NyteStatus;