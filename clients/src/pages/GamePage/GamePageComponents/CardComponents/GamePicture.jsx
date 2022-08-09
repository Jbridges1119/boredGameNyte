import { CardMedia } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../../../assets/theme";

const GamePicture = (props) => {
  return (
   
    <Box
      sx={{
        width: "100%",
        borderRadius: "20px",
        border:'none',
        backgroundColor: theme.palette.primary.dark,
        height: "444px",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <CardMedia
        component="img"
        image={
          props.picture.gameData[0]
            ? props.picture.gameData[0].images.large
            : ""
        }
        alt=""
        sx={{
          objectFit: "contain",
          maxWidth: "400px",
          maxHeight: "600px",
          borderRadius: '20px',
          
        }}
      />
    </Box>
       
  );
};

export default GamePicture;
