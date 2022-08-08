import { Button } from "@mui/material";
import theme from "../../../../../assets/theme"

const UserNotSelected = (props) => {
  return ( 
    <>
 <Button  sx={{backgroundColor: "green", height: 45, width:200,  fontSize: 20,  borderRadius: '20px',mt: 0.5  }} variant="contained">I'll Be There</Button>


 <Button  sx={{backgroundColor: "darkred", height: 30, width:200, fontSize: 18,  borderRadius: '20px', mt: 1  }} variant="contained">Can't Make It</Button>
 </>
   );
}
 
export default UserNotSelected;