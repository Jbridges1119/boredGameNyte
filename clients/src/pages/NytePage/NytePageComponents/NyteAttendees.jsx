import { CardContent, Paper } from "@mui/material";
import theme from "../../../assets/theme"

const NyteAttendees = () => {
  const card = <>
  <CardContent
        sx={{
          height: 225,
          backgroundColor: theme.palette.secondary.main,
          borderRadius: '15px' 
        }}
      ></CardContent>
  </>;

  
    
    
    return (
      <Paper sx={{ borderRadius: "20px" }} elevation={4} >
        {card}
      </Paper>
    );
  };
  

 
export default NyteAttendees;