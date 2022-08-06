import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Person from "@mui/icons-material/Person";

const friends = [
  {
    name: "The Professor",
    email: "TheProfessor@gmail.com",
  },
  {
    name: "Zoidberg",
    email: "Zoidberg@gmail.com",
  },
  {
    name: "Bender",
    email: "BenderIsGreat@gmail.com",
  },
  {
    name: "Turanga Leela",
    email: "Oneye@gmail.com",
  },
  {
    name: "Amy Wong",
    email: "superrich@gmail.com",
  },
];

const friendsList = friends.map((friend) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <Person />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={friend.name} secondary={friend.email} />
    </ListItem>
  );
});

export default function FriendsList(props) {
  console.log(friendsList);
  return (
    <Grid item xs={12}>
      <List
        disableGutters
        sx={{
          width: "100%",
          position: "relative",
          overflow: "auto",
          maxHeight: 200,
        }}
      >
        {friendsList}
      </List>
    </Grid>
  );
}
