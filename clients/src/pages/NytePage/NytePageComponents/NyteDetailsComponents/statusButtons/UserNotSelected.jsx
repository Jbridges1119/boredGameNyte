import { Button } from "@mui/material";
import theme from "../../../../../assets/theme"

const UserNotSelected = (props) => {
  return ( 
    <>
 <Button 
 onClick={props.onConfirm}  
 sx={{
  ':hover': {
    bgcolor: 'lightgreen',
    boxShadow:24
  },
  backgroundColor: "green", 
  height: 45, 
  width:200,  
  fontSize: 25, 
  borderRadius: '20px',
  mt: 0.5,
  textTransform: "none",  
  pt:1.25 }} variant="contained">I'll Be There</Button>


 <Button  
 onClick={props.onCancel} 
 sx={{
  ':hover': {
    bgcolor: theme.palette.warning.main,
    boxShadow:24
  },
  backgroundColor: "darkred", 
  height: 30, 
  width:200, 
  fontSize: 18, 
  borderRadius: '20px', 
  mt: 1,
  textTransform: "none",  
  pt:1.25 }} variant="contained">Can't Make It</Button>
 </>
   );
}
 
export default UserNotSelected;