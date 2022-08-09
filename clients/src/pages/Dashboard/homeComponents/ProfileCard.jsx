import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import theme from "../../../assets/theme";
import { Box } from "@mui/material";

export default function ProfileCard() {
  return (
    <Box
    sx={{
      backgroundColor: theme.palette.primary.main,
  height: 300,
  borderRadius: "20px",
  display: "flex",
    }}
  >
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={11}>
      <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={5}>
      <CardMedia
      component="img"
      height="240"
      width="240"
      image="https://i.imgur.com/hHmdwtZ.png"
      alt="Fry Profile"
      alignContent="center"
      sx={{
        width: "90%",
        height: "90%",
      }}
      />
      </Grid>
      <Grid item xs={5}>

      </Grid>
    </Grid> </Grid>
    </Grid>
  </Box>
  );
}



// <Card
// sx={{
//   backgroundColor: theme.palette.primary.main,
//   height: 300,
//   borderRadius: "20px",
//   display: "flex",
// }}
// >
// <Grid container alignItems="center" sx={{ justifyContent: "space-evenly", textAlign: "center" }}>
//   <Grid item sx={4}>
//     <CardMedia
//       component="img"
//       height="240"
//       width="240"
//       image="https://i.imgur.com/hHmdwtZ.png"
//       alt="Fry Profile"
//       alignContent="center"
//       sx={{
//         width: "90%",
//         height: "90%",
//       }}
//       />
//   </Grid>
//   <Grid item sx={9}>
//     <CardHeader sx={{ color: "white", pb: 10 }} title=" Welcome Back Filip Fry!" />
//     <Grid
//       container
//       sx={{ justifyContent: "center", textAlign: "center" }}
//       >
//       <Grid item xs={6}>
//         <Typography variant="h8" color="White">
//           NYTES HOSTED
//         </Typography>
//         <Typography sx={{ color: "white" }} variant="h5">
//           3
//         </Typography>
//       </Grid>
//       <Grid item xs={6}>
//         <Typography variant="h8" color="White">
//           NYTES ATTENDED
//         </Typography>
//         <Typography sx={{ color: "white" }} variant="h5">
//           6
//         </Typography>
//       </Grid>
//     </Grid>
//   </Grid>
// </Grid>
// </Card>