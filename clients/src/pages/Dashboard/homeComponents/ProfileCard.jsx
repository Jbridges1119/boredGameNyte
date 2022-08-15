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
                  image={props.state ? props.state.avatar_img : "https://i.imgur.com/hHmdwtZ.png"}
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
  )
};
