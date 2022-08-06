import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import theme from "../../../assets/theme";

export default function ProfileCard() {
  return (
    <Card
      sx={{
        backgroundColor: theme.palette.secondary.main,
        height: 300,
        borderRadius: "20px",
      }}
    >
      <Grid>
        <CardHeader title="Filip Fry" />
        <CardMedia
          component="img"
          height="30"
          width="30"
          image="https://i.imgur.com/hHmdwtZ.png"
          alt="Fry Profile"
          alignContent="center"
          sx={{
            width: "20%",
            height: "20%",
          }}
        />
        <CardContent>
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item xs={6}>
              <Typography variant="h8" color="textSecondary">
                GAME NYTES HOSTED
              </Typography>
              <Typography variant="h5">3</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h8" color="textSecondary">
                GAME NYTE VICTORIES
              </Typography>
              <Typography variant="h5">1</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Grid>
    </Card>
  );
}
