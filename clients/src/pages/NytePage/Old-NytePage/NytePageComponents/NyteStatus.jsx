import { Stack, Button } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../../assets/theme"
const NyteStatus = () => {
  return ( 
   
    <Stack >
            

              {/* Cancel event - host */}
          <Button  sx={{backgroundColor: "darkred", height: 50,  fontSize: 20, textTransform: 'none', borderRadius: '20px',  }} variant="contained">Cancel Nyte</Button>

            {/* Confirm event - guest */}
              {/* <Button  sx={{backgroundColor: theme.palette.error.main, height: 75,  fontSize: 40, textTransform: 'none', borderRadius: '20px',  }} variant="contained">Confirm</Button> */}

          {/* back out of event - guest*/}
          {/* <Button  sx={{backgroundColor: "darkred", height: 75,  fontSize: 40, textTransform: 'none', borderRadius: '20px',  }} variant="contained">Cancel</Button> */}
          </Stack>
        
   );
}
 
export default NyteStatus;