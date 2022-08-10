import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import theme from "../../../assets/theme";

export default function ProfileCard(props) {

  let greeting = `Welcome Back ${props.state.first_name} ${props.state.last_name}!`

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.primary.main,
        height: 300,
        borderRadius: "20px",
        display: "flex",
      }}
    >
      <Grid container alignItems="center" sx={{ justifyContent: "space-evenly", textAlign: "center" }}>
        <Grid item sx={4}>
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
        <Grid item sx={9}>
          <CardHeader sx={{ color: "white", pb: 10 }} title= {greeting}/>
          <Grid
            container
            sx={{ justifyContent: "center", textAlign: "center" }}
            >
            <Grid item xs={6}>
              <Typography variant="h8" color="White">
                NYTES HOSTED
              </Typography>
              <Typography sx={{ color: "white" }} variant="h5">
                3
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h8" color="White">
                NYTES ATTENDED
              </Typography>
              <Typography sx={{ color: "white" }} variant="h5">
                6
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
