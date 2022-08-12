import * as React from "react";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import theme from "../../../assets/theme";
import { Box, Stack } from "@mui/material";

export default function ProfileCard(props) {
  let greeting = `Welcome Back ${props.state.first_name} ${props.state.last_name}!`;

  const totalGameNytesHosted = props.completeGameNytesHosted.length;
  const totalGameNytesAtteneded = props.gameNytesAttended.length;

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
              <Box
                sx={{
                  width: "100%",
                  borderRadius: "20px",
                  backgroundColor: theme.palette.primary.dark,
                  height: "225px",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image="https://i.imgur.com/hHmdwtZ.png"
                  alt=""
                  sx={{
                    objectFit: "contain",
                    maxWidth: "250px",
                    maxHeight: "200px",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={6}>
              <Stack spacing={1}>
                <Typography variant="h4" color="White">
                  {greeting}
                </Typography>
                <Box>
                  <Typography variant="h6" color="White">
                    Nytes Hosted
                  </Typography>
                  <Typography sx={{ color: "white" }} variant="h5">
                    {totalGameNytesHosted}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" color="White">
                    Nytes Attended
                  </Typography>
                  <Typography sx={{ color: "white" }} variant="h5">
                    {totalGameNytesAtteneded}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
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
