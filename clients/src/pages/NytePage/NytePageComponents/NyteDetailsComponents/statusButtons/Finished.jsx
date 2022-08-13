import { Button } from "@mui/material";
import theme from "../../../../../assets/theme"

const Finished = () => {
  return ( 
    <Button disabled sx={{color: 'white', backgroundColor: "darkred", height: 50, width:200, fontSize: 25,  borderRadius: '20px',textTransform: "none", pt:1.25  }} variant="contained">Finished</Button>
   );
}
 
export default Finished;