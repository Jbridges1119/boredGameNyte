import { Stack,  Typography } from "@mui/material";
import { Box } from "@mui/system";
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
  const host = props.host ? "Host" : ""
  const invited = props.invited !== undefined ? props.invited : ""
  const mode = function(input) {
      if(input) return "Confirmed"
      if(input === false ) return "Declined"
      if(input === null) return "Not Selected"
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
            {host === 'Host' && <Host onCancelEvent={mode} />}
            {mode(invited) === "Confirmed" && <UserConfirmed onCancel={mode} />}
            {mode(invited) === "Declined" && <UserDeclined onConfirm={mode} />}
            {mode(invited) === 'Not Selected' && <UserNotSelected onConfirm={mode} onCancel={mode}/>}
          </Box>
          </Stack>
          </Box>
          </>
   );
}
 
export default NyteStatus;