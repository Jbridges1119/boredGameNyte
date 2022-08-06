import { TextField } from "@mui/material";
import theme from "../../../assets/theme";


const TitleBar = () => {

  return(
    <TextField sx ={{ 
      backgroundColor: theme.palette.secondary.dark, 
      alignContent: "center", 
      justifyContent: "center", 
      width: "90%" 
    }}
      label="Name Your Game Nyte!" 
      color="info" 
      focused />
  );
};

export default TitleBar;