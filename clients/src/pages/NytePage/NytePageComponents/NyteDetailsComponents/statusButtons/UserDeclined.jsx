import { Button } from "@mui/material";
import theme from "../../../../../assets/theme"

const UserDeclined = (props) => {
  return ( 
            <Button  sx={{backgroundColor: "green", height: 50, width:200, fontSize: 25,  borderRadius: '20px',textTransform: "none",  pt:1.25 }} variant="contained">I'll be there</Button> 
  
   );
}
 
export default UserDeclined;