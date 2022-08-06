import * as React from 'react';
import Grid from "@mui/material/Grid"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FriendsList from './FriendsList';
import theme from '../../../assets/theme';

export default function FriendsListCard() {



  return (
    <Card sx={{
      backgroundColor: theme.palette.secondary.main,
      height: 300,
      borderRadius: '20px',
      
    }}>
      <Grid>
        <CardHeader title= "Friends List"/>
        <CardContent>
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid alignContent="center" item xs={11} >
              <Typography variant="h6" color="textSecondary">
                <FriendsList />
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Grid>
    </Card>
  );
}