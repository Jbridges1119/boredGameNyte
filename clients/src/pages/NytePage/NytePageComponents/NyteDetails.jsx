import { CardContent, CardMedia,  Paper,  Stack, Typography } from "@mui/material";
import BGN from "./Pictures/BGN.png";
import theme from '../../../assets/theme'
import NyteStatus from './NyteDetailsComponents/NyteStatus'
import NyteInvites from './NyteDetailsComponents/NyteInvites'


const NyteDetails = () => {
 

    return (
      <CardContent
      sx={{
        height: 803,
        backgroundColor: theme.palette.primary.dark,
        borderRadius: "15px",
      }}
    >
     <Stack
     container
     
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
              alt="green iguana"
              sx={{
                maxWidth: "200px",
                maxHeight: "200px",
                borderRadius: "20px"
              }}
            />
      </Paper>
      <Typography sx={{color: "#FFFFFF"}}pt={1} align="center" variant="h5">Hosted By</Typography>
      <Typography sx={{color: "#FFFFFF"}} align="center" variant="h7">Johnny Johnson</Typography>
      <NyteStatus/>
      <NyteInvites/>
     </Stack>
    </CardContent>
    );
  };

export default NyteDetails;