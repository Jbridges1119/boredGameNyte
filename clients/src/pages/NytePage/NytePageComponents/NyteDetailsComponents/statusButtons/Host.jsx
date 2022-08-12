import { Button } from "@mui/material";
import theme from "../../../../../assets/theme"

const Host = (props) => {
  return ( 
 
           <Button onClick={props.onCancelNyte} sx={{backgroundColor: "darkred", height: 50, width:200, fontSize: 25,  borderRadius: '20px',textTransform: "none", pt:1.25  }} variant="contained">Cancel Nyte</Button>
   )
}
// component={Link} to={'/home'}
export default Host;