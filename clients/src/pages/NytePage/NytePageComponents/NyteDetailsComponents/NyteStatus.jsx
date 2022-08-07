import { Stack, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../../../assets/theme"
const NyteStatus = () => {
  return ( 
   <Box sx={{ maxWidth: '90%'}}>
    <Stack container
     justifyContent="space-evenly"
     alignItems="space-evenly" 
     spacing={1}>
            <Typography sx={{color: "#FFFFFF"}}pt={2} align="center" variant="h4">Aug 15 2022</Typography>

            <Typography sx={{color: "#FFFFFF",}}  align="center" variant="h8">6:30PM</Typography>      
            
                    {/* Cancel event - host */}
          {/* <Button  sx={{backgroundColor: "darkred", height: 50,  fontSize: 20, textTransform: 'none', borderRadius: '20px',  }} variant="contained">Cancel Nyte</Button> */}

            {/* Confirm event - guest */}
              <Button  sx={{backgroundColor: "green", height: 45,  fontSize: 25,  borderRadius: '20px',  }} variant="contained">Confirm</Button>

          {/* back out of event - guest*/}
          <Button  sx={{backgroundColor: "darkred", height: 30,  fontSize: 20,  borderRadius: '20px',  }} variant="contained">Cancel</Button>
          </Stack>
          </Box>
   );
}
 
export default NyteStatus;