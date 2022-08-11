import { CardContent, CardMedia,  Paper,  Stack } from "@mui/material";
import theme from '../../../assets/theme'
import NyteStatus from './NyteDetailsComponents/NyteStatus'
import NyteInvites from './NyteDetailsComponents/NyteInvites'
import BGN from "./Pictures/BGN.png";
import BGNCasual from './Pictures/BGNCasual.png'

const NyteDetails = (props) => {
  const picture = props.data[0] ? props.data[0].competitive : "";
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
              image={img}
              alt="BGN"
              sx={{
                maxWidth: "200px",
                maxHeight: "200px",
                borderRadius: "20px"
              }}
            />
      </Paper>
    
      <NyteStatus 
        data={props.data}
        user={props.user}
        hostData={props.hostData}
      />
      <NyteInvites
        data={props.data}
        hostData={props.hostData}
      />
     </Stack>
    </CardContent>
    );
  };

export default NyteDetails;