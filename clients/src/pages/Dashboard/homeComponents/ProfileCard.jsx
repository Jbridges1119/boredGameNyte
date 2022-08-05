import * as React from 'react';
import Grid from "@mui/material/Grid"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';

export default function ProfileCard() {
  return (
    <Card elevation={1}>
      <CardHeader title= "Filip Fry"/>
      <CardMedia
        component="img"
        height="80"
        image="clients/docs/fry-headshot.png"
        alt="Fry Profile"
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" color="textSecondary">
              GAME NYTES HOSTED
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" color="textSecondary">
              GAME NYTE VICTORIES
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}