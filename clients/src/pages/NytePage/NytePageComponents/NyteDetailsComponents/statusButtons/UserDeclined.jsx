import { Button } from "@mui/material";
import theme from "../../../../../assets/theme"

const UserDeclined = (props) => {
  return ( 
            <Button 
            onClick={props.onConfirm} 
            sx={{
              ':hover': {
                bgcolor: 'lightgreen',
                boxShadow:24
               
              },':active': {
                bgcolor: theme.palette.error.light,
                boxShadow:8
                
              },
              backgroundColor: "green", 
              height: 50, 
              width:200, 
              fontSize: 25,  
              borderRadius: '20px',
              textTransform: "none",  
              pt:0.9 }} 
              variant="contained">I'll be there</Button> 
  
   );
}
 
export default UserDeclined;