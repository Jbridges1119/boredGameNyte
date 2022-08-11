import { Stack,  Typography } from "@mui/material";
import { Box } from "@mui/system";
import Host from "./statusButtons/Host";
import UserConfirmed from "./statusButtons/UserConfirmed";
import UserDeclined from "./statusButtons/UserDeclined";
import UserNotSelected from "./statusButtons/UserNotSelected";
import { formatDate, formatTime } from "../../../../helperFunctions/helperFunctions"


const NyteStatus = (props) => {
  const firstName = props.hostData ? props.hostData.first_name : "First "
  const lastName = props.hostData ? props.hostData.last_name : "Last "
  const date = props.data[0] ? formatDate(props.data[0].date) : "Date"
  const time = props.data[0] ? formatTime(props.data[0].date) : "time"
  const location = props.data[0] ? props.data[0].location : "location"
  const host = (props.user && props.hostData) && props.hostData.id === props.user.id ? "Host" : ""

  const status = () => { 
    for (let key of props.data) {
      console.log('key1:', key)
      console.log("data:", props.data)
      if (key.attendee_id === (props.user ? props.user.id : "" )) {
        console.log('key2:', key.attend_status)
        return key.attend_status
      }
  }}
  
  const invited = props.data[0] === undefined ? "" : status()
console.log('user and data',props.user)
  
  const mode = function(input) {
      if(input) return "Confirmed"
      if(input === false ) return "Declined"
      if(input === null) return "Not Selected"      
  }
  const font = {color: "#FFFFFF", fontSize: 18,lineHeight: 'normal'}
  return ( 

<>
  
   <Box sx={{ maxWidth: '90%', pt: 1}}>
    <Stack 
     justifyContent="center"
     alignItems="center" 
     spacing={0}>
       
       <Box  sx={{display:'flex', flexDirection: 'column', height:'156px', justifyContent:'space-evenly'}}>
       <Typography sx={{color: "#FFFFFF"}} align="center" variant="h4">Hosted By</Typography>
      <Typography sx={font} align="center" variant="h6">{firstName} {lastName}</Typography>
            <Typography sx={font} align="center" variant="h6">{date}</Typography>
            <Typography sx={font}  align="center" variant="h6">{time}</Typography>    
              
            <Typography sx={font}  align="center" variant="h6">{location}</Typography> 
            </Box>
            <Box sx={{display:'flex', flexDirection: 'column', height:'87px', justifyContent:'space-evenly'}}>
            {host === 'Host' && <Host onCancelEvent={mode} />}

            {host ? "": mode(invited) === "Confirmed" && <UserConfirmed onCancel={mode} />}
            {host ? "": mode(invited) === "Declined" && <UserDeclined onConfirm={mode} />}
            {host ? "": mode(invited) === 'Not Selected' && <UserNotSelected onConfirm={mode} onCancel={mode}/>}
          </Box>
          </Stack>
          </Box>
          </>
   );
}
 
export default NyteStatus;