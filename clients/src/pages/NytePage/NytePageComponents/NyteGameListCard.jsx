import { CardContent, Paper } from "@mui/material";
import theme from "../../../assets/theme"



const NyteGameListCard = () => {
  const card = <>
  <CardContent
        sx={{
          height: 225,
          backgroundColor:theme.palette.secondary.main,
          borderRadius: '15px' 
        }}

        
      ></CardContent>
  </>;

  
  
  return (
    <Paper sx={{ borderRadius: "20px",backgroundColor:theme.palette.secondary.main }} elevation={4} >
      {card}
    </Paper>
  );
};

export default NyteGameListCard;
