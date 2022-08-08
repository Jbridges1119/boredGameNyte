import { Stack, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../../../assets/theme"
import Host from "./statusButtons/Host";
import UserConfirmed from "./statusButtons/UserConfirmed";
import UserDeclined from "./statusButtons/UserDeclined";
import UserNotSelected from "./statusButtons/UserNotSelected";


const NyteStatus = (props) => {
  const firstName = props.first ? props.first : "First Name"
  const lastName = props.last ? props.last : "Last Name"
  const date = props.date ? props.date : "date"
  const time = props.time ? props.time : "time"
  const location = props.location ? props.location : "location"
 
  const mode = function(input) {

  }

  return ( 
<>
  
   <Box sx={{ maxWidth: '90%', pt: 1}}>
    <Stack container
     justifyContent="center"
     alignItems="center" 
     spacing={0}>
       
       <Box  sx={{display:'flex', flexDirection: 'column', height:'156px', justifyContent:'space-evenly'}}>
       <Typography sx={{color: "#FFFFFF"}} align="center" variant="h4">Hosted By</Typography>
      <Typography sx={{color: "#FFFFFF", fontSize: 18,lineHeight: 'normal'}} align="center" variant="h6">{firstName} {lastName}</Typography>
            <Typography sx={{color: "#FFFFFF", fontSize: 18,lineHeight: 'normal'}} align="center" variant="h6">{date}</Typography>
            <Typography sx={{color: "#FFFFFF", fontSize: 18,lineHeight: 'normal'}}  align="center" variant="h6">{time}</Typography>    
              
            <Typography sx={{color: "#FFFFFF", fontSize: 18,lineHeight: 'normal'}}  align="center" variant="h6">{location}</Typography> 
            </Box>
            <Box sx={{display:'flex', flexDirection: 'column', height:'87px', justifyContent:'space-evenly'}}>
            {mode === 'Host' && <Host onClick={mode} />}
            {mode === "Confirmed" && <UserConfirmed onClick={mode} />}
            {mode === "Declined" && <UserDeclined onClick={mode} />}
            {mode === 'Not Selected' && <UserNotSelected onClick={mode} />}
          </Box>
          </Stack>
          </Box>
          </>
   );
}
 
export default NyteStatus;