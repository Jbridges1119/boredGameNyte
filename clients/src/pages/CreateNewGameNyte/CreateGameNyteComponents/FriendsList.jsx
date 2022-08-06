import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Person from '@mui/icons-material/Person';

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


export default function FriendsList() {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const friendsList = friends.map((friend) => {
    const labelId = `checkbox-list-secondary-label-${friend.indexOf}`;
    console.log(labelId);
    return (
      <ListItem
      key={friend.indexOf}
      secondaryAction={
        <Checkbox
          edge="end"
          onChange={handleToggle(friend.indexOf)}
          checked={checked.indexOf(friend.indexOf) !== -1}
          inputProps={{ 'aria-labelledby': labelId }}
        />
      }
      disablePadding
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

  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {friendsList}
    </List>
  );
}
