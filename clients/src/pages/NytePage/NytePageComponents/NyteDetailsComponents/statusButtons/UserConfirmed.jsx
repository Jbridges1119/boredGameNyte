import { Button } from "@mui/material";
import theme from "../../../../../assets/theme"

const UserConfirmed = (props) => {
  return ( 
   
             <Button onClick={props.onCancel} sx={{backgroundColor: "darkred", height: 50, width:200, fontSize: 25,  borderRadius: '20px',textTransform: "none",  pt:1.25 }} variant="contained">Back out</Button> 
   );
}
 
export default UserConfirmed;