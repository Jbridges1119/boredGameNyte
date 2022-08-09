import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import { Person } from '@mui/icons-material';

const friends = [
  {
    name: "The Professor",
    email: "TheProfessor@gmail.com",
    id: 0
  },
  {
    name: "Zoidberg",
    email: "Zoidberg@gmail.com",
    id: 1
  },
  {
    name: "Bender",
    email: "BenderIsGreat@gmail.com",
    id: 2
  },
  {
    name: "Turanga Leela",
    email: "Oneye@gmail.com",
    id: 3
  },
  {
    name: "Amy Wong",
    email: "superrich@gmail.com",
    id: 4
  },
  {
    name: "Scruffy",
    email: "scruffythejanitor@gmail.com",
    id: 5
  },
  {
    name: "Zapp Brannigan",
    email: "sexyspacecommander@gmail.com",
    id: 6
  },
  {
    name: "Kif Kroaker",
    email: "ltkif@gmail.com",
    id: 7
  }
];


export default function FriendsList(props) {
  

  const friendsList = props.state.friendsList.map((friend) => {
    let labelId = `checkbox-list-secondary-label-${friend.friend_id}`;
    let name = `${friend.first_name} ${friend.last_name}`
    return (
      <ListItem
      key={friend.friend_id}
      secondaryAction={
        <Checkbox
          color="error"
          edge="end"
          onChange={props.handleFriendToggle(friend.friend_id)}
          checked={props.state.friendsInvited.indexOf(friend.friend_id) !== -1}
          inputProps={{ 'aria-labelledby': labelId }}
        />
      }>
        <ListItemAvatar>
          <Person />
        </ListItemAvatar>
        <ListItemText primary={name} secondary={friend.email} />
      </ListItem>
    );
  });

  return (
    <List 
    dense 
    sx={{ 
      width: '100%', 
      midWidth: 360,
      maxWidth: 800,
      position: "relative",
      overflow: "auto",
      maxHeight: 475
      }}>
      {friendsList}
    </List>
  );
}
