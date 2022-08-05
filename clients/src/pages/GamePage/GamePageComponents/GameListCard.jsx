import { CardContent, Paper } from "@mui/material";
import theme from "../../../assets/theme"



const GameListCard = () => {
  const card = <>
  <CardContent
        sx={{
          height: 250,
          backgroundColor: theme.palette.primary.main,
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

export default GameListCard;
