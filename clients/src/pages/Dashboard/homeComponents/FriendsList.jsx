import * as React from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import Person from "@mui/icons-material/Person";


const FriendList = styled(ListItemText)({
  '& .MuiListItemText-secondary': {
    color:'white',
    fontSize: '13px'
  },'& .MuiListItemText-primary': {
    color:'white',
    fontSize: '15px'
  },
});

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

export default function FriendsList(props) {

  const friendsList = props.state.map((friend) => {

    let name = `${friend.first_name} ${friend.last_name}`

    return (
      <ListItem
        key={friend.friend_id}
        secondaryAction={
          <IconButton size='large' edge="end" aria-label="delete" sx={{ color: "white" }}>
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <Person />
          </Avatar>
        </ListItemAvatar>
        <FriendList primary={name} secondary={friend.email} />
      </ListItem>
    );
  });

  return (
    <Grid item xs={12}>
      <List
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
