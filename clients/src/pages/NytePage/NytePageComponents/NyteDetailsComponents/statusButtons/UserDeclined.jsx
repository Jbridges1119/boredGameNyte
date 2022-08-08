import { Button } from "@mui/material";
import theme from "../../../../../assets/theme"

const UserDeclined = (props) => {
  return ( 
            <Button  sx={{backgroundColor: "green", height: 50, width:200, fontSize: 18,  borderRadius: '20px'  }} variant="contained">Plans Changed</Button> 
  
   );
}
 
export default UserDeclined;