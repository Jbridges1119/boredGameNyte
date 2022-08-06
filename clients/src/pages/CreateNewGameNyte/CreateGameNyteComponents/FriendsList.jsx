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
    let labelId = `checkbox-list-secondary-label-${friend.id}`;
    return (
      <ListItem
      key={friend.id}
      secondaryAction={
        <Checkbox
          edge="end"
          onChange={handleToggle(friend.id)}
          checked={checked.indexOf(friend.id) !== -1}
          inputProps={{ 'aria-labelledby': labelId }}
        />
      }
      disablePadding
      >
        <ListItemAvatar>
          {/* <Avatar> */}
            <Person />
          {/* </Avatar> */}
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
