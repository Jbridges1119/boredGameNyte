import { Stack,  Typography } from "@mui/material";
import { Box } from "@mui/system";
import Host from "./statusButtons/Host";
import UserConfirmed from "./statusButtons/UserConfirmed";
import UserDeclined from "./statusButtons/UserDeclined";
import UserNotSelected from "./statusButtons/UserNotSelected";
import { formatDate, formatTime } from "../../../../helperFunctions/helperFunctions"
import Finished from './statusButtons/Finished'

const NyteStatus = (props) => {
  const firstName = props.hostData ? props.hostData.first_name : ""
  const lastName = props.hostData ? props.hostData.last_name : ""
  const date = props.data[0] ? formatDate(props.data[0].date) : ""
  const time = props.data[0] ? formatTime(props.data[0].date) : ""
  const location = props.data[0] ? props.data[0].location : ""
  const host = (props.user && props.hostData) && props.hostData.id === props.user.id ? true : false
  const gameStatus = props.data[0] ? props.data[0].status : "completed"

  //Checks the status of an invited
  const status = () => { 
    for (let key of props.data) {
      if (key.attendee_id === (props.user ? props.user.id : "" )) {
        return key.attend_status
      }
  }}
  const invited = props.data[0] === undefined ? "" : status()

  //Sets which buttons to render based on invited 
  const mode = function(input, gameStatus, host) {
      if(gameStatus === "completed") return "Completed"
      if(host) return "Host"
      if(input) return "Confirmed"
      if(input === false ) return "Declined"
      if(input === null) return "Not Selected"      
  }
  const font = {color: "#FFFFFF", fontSize: 18,lineHeight: 'normal'}
  return ( 
// 'complete'
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

            {mode(invited, gameStatus, host) === "Completed" && <Finished />}
            {mode(invited, gameStatus, host) === "Host" && <Host onCancelNyte={props.onCancelNyte} />}
            {mode(invited, gameStatus, host) === "Confirmed" && <UserConfirmed  onCancel={props.onCancel}/>}
            {mode(invited, gameStatus, host) === "Declined" && <UserDeclined onConfirm={props.onConfirm} />}
            {mode(invited, gameStatus, host) === 'Not Selected' && <UserNotSelected onConfirm={props.onConfirm} onCancel={props.onCancel}/>}
          </Box>
          </Stack>
          </Box>
          </>
   );
}
 
export default NyteStatus;