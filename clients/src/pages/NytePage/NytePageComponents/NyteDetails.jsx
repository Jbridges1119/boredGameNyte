import { CardContent, CardMedia,  Paper,  Stack } from "@mui/material";
import BGN from "./Pictures/BGN.png";
import theme from '../../../assets/theme'
import NyteStatus from './NyteDetailsComponents/NyteStatus'
import NyteInvites from './NyteDetailsComponents/NyteInvites'
import BGNCasual from './Pictures/BGNCasual.png'

const NyteDetails = (props) => {
  const picture = props ? props.img : "";
  //place in image when ready
    const img = picture ? BGN : BGNCasual


    return (
      <CardContent
      sx={{
        height: 803,
        backgroundColor: theme.palette.primary.dark,
        borderRadius: "15px",
        pt: 0
      }}
    >
     <Stack
     
     
     justifyContent="center"
     alignItems="center">
     <Paper
    sx={{
      
      borderRadius: "22px"
    }}
    elevation={4}
  >
     <CardMedia
              component="img"
              image={BGN}
              alt="BGN"
              sx={{
                maxWidth: "200px",
                maxHeight: "200px",
                borderRadius: "20px"
              }}
            />
      </Paper>
    
      <NyteStatus/>
      <NyteInvites/>
     </Stack>
    </CardContent>
    );
  };

export default NyteDetails;